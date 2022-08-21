import TextBox from './TextBox';
import GeneratorButton from './GeneratorButton';
import React, {useState, useEffect} from 'react';

function Generator() {
    const initQuoteData = {
        anime: "",
        character: "",
        quote:"",
        image:"",
      }
    const [quoteData, setQuoteData] = useState(initQuoteData)

    useEffect(()=>{
        async function getAnime(){
            await fetch("https://animechan.vercel.app/api/random",{method:"GET"})
            .then((response) => response.json())
            .then((data) => {
              setQuoteData({ ...quoteData, ...data });
              return fetch(
                `https://kitsu.io/api/edge/anime?filter[text]=${quoteData.anime
                  .replace(/-|!|;|:/g, "")
                  .replace(/\s+/g, "%20")
                  .toLowerCase()}`,{method:"GET"})
            })
            .then((response) => response.json())
            .then(({data})=>{
              console.log(data[0].attributes.coverImage.original)
            })
            .then(console.log(quoteData))
        }
        getAnime()

        return ()=>{
            setQuoteData({...initQuoteData})
        }
      },[])

    return ( 
        <div>
            <GeneratorButton quoteData={quoteData} setQuoteData={setQuoteData}/>
            <TextBox quoteData={quoteData}/>
        </div>
     );
}

export default Generator;