import React from "react";

function GeneratorButton({
  quoteData,
  setQuoteData,
  background,
  setBackground,
}) {
  const changeBackground = () => {
    
  }
  async function changeAnime() {
    await fetch("https://animechan.vercel.app/api/random", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setQuoteData({ ...quoteData, ...data });
        return fetch(
          `https://kitsu.io/api/edge/anime?filter[text]=${quoteData.anime
            .replace(/-|!|;|:/g, "")
            .replace(/\s+/g, "%20")
            .toLowerCase()}`,
          { method: "GET" }
        );
      })
      .then((response) => response.json())
      .then(({ data }) => {
        setBackground(data[0].attributes.coverImage.original);
        // setQuoteData({...quoteData, image: `url(${data[0].attributes.coverImage.original})`})
      })
      .then(changeBackground)
      .then(console.log(quoteData))
      .then(console.log(background));
  }

  return (
    <div>
      <button onClick={changeAnime}>Anime</button>
    </div>
  );
}

export default GeneratorButton;

/*
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
        .toLowerCase()}`)
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data[0].attributes.coverImage.original);
        setQuoteFormData({...quoteFormData,'image':data[0].attributes.coverImage.original})
      })
      .then(console.log(quoteFormData));
*/
