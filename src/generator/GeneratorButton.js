import React, { useEffect } from "react";

function GeneratorButton({
  quoteFormData,
  setQuoteFormData,
  initQuoteFormData,
}) {
  const handleGetAnime = async () => {
    await fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((data) => {
        setQuoteFormData({ ...quoteFormData, ...data });
      })
      .then(
        console.log(
          quoteFormData.anime
            .replace(/-|!|;|:/g, "")
            .replace(/\s+/g, "%20")
            .toLowerCase()
        )
      );

    await fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${quoteFormData.anime
        .replace(/-|!|;|:/g, "")
        .replace(/\s+/g, "%20")
        .toLowerCase()}`
    )
      .then((response) => response.json())
      .then(({ data }) => {
          console.log(data[0].attributes.coverImage.large)
        })
      .then(console.log(quoteFormData));
      
  };

  return (
    <div>
      <button onClick={handleGetAnime}>Anime</button>
    </div>
  );
}

export default GeneratorButton;
