import React from 'react';


function TextBox({quoteFormData}) {
    return ( 
        <div>
            <p>Anime Title : {quoteFormData.anime}</p>
            <p>Anime Character : {quoteFormData.character}</p>
            <p>Anime Quote : {quoteFormData.quote}</p>
        </div>
     );
}

export default TextBox;