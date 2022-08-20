import TextBox from './TextBox';
import GeneratorButton from './GeneratorButton';
import React, {useState} from 'react';

function Generator() {
    const initQuoteFormData = {
        anime: "",
        character: "",
        quote:"",
        image:"",
      }
    const [quoteFormData, setQuoteFormData] = useState(initQuoteFormData)
    console.log(quoteFormData)
    return ( 
        <div>
            <GeneratorButton initQuoteFormData={initQuoteFormData} quoteFormData={quoteFormData} setQuoteFormData={setQuoteFormData}/>
            <TextBox quoteFormData={quoteFormData}/>
        </div>
     );
}

export default Generator;