import Generator from './generator/Generator';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [background, setBackground] = useState(``);

  useEffect(()=>{
    document.body.style.backgroundImage = `url(${background})`
  },[background])

  return (
    <div className="App">
      <Generator background={background} setBackground={setBackground}/>
    </div>
  );
}

export default App;
