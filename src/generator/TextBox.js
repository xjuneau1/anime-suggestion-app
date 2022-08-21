import React from 'react';


function TextBox({quoteData}) {
    return ( 
        <div>
            <p>Anime Title : {quoteData.anime}</p>
            <p>Anime Character : {quoteData.character}</p>
            <p>Anime Quote : {quoteData.quote}</p>
        </div>
     );
}

export default TextBox;