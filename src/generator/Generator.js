import TextBox from "./TextBox";
import GeneratorButton from "./GeneratorButton";
import React, { useState, useEffect } from "react";

function Generator({background, setBackground}) {

  const initQuoteData = {
    anime: "",
    character: "",
    quote: "",
  };

  const [quoteData, setQuoteData] = useState(initQuoteData);
 
  useEffect(() => {
    const abortController = new AbortController();
    async function getAnime() {
      await fetch("https://animechan.vercel.app/api/random", {
        method: "GET",
        signal: abortController.signal,
      })
        .then((response) => response.json())
        .then((data) => {
          setQuoteData({ ...quoteData, ...data });
          return fetch(
            `https://kitsu.io/api/edge/anime?filter[text]=${quoteData.anime
              .replace(/-|!|;|:/g, "")
              .replace(/\s+/g, "%20")
              .toLowerCase()}`,
            { method: "GET", signal: abortController.signal }
          );
        })
        .then((response) => response.json())
        .then(({ data }) =>
          setBackground(data[0].attributes.coverImage.original)
        )
        .then(console.log(background))
        .catch((error) => console.log(error));
    }
    getAnime();

    return () => {
      abortController.abort();
      setQuoteData({ ...initQuoteData });
    };
  }, []);

  return (
    <div>
      <GeneratorButton
        quoteData={quoteData}
        setQuoteData={setQuoteData}
        background={background}
        setBackground={setBackground}
      />
      <TextBox quoteData={quoteData} />
    </div>
  );
}

export default Generator;
