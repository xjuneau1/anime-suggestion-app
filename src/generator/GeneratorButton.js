import React, { useEffect } from "react";

function GeneratorButton({ quoteFormData, setQuoteFormData, initFormData }) {
  
  useEffect(()=>{
    async function getAnime(){
      await fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((data) => {
        setQuoteFormData({ ...quoteFormData, ...data });
      })
    }
    getAnime()
  },[])
  
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
        .toLowerCase()}`)
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data[0].attributes.coverImage.original);
        setQuoteFormData({...quoteFormData,'image':data[0].attributes.coverImage.original})
      })
      .then(console.log(quoteFormData));
  };
  const handleSetAnime = async (event)=> {
    await handleGetAnime()
    
    const body = event.target.parentNode.parentNode.parentNode.parentNode
    body.style.backgroundImage = quoteFormData.image
  }
  return (
    <div>
      <button onClick={handleSetAnime}>Anime</button>
    </div>
  );
}

export default GeneratorButton;
