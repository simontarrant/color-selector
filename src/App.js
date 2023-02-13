import ColorTile from './ColorTile.js'
import Search from './Search.js';
import colorNames from 'colornames';
import { useState } from 'react';
import './App.css';

function App() {

  const [col, setCol] = useState('navy');
  const [hexVal, setHexVal] = useState(colorNames(col));
  const [isDarkText, setIsDarkText] = useState(false);

  return (
    <div className="App">
      <ColorTile
        col={col}
        hexVal={hexVal}
        isDarkText={isDarkText}/>
      <Search
        col={col}
        setCol={setCol}
        setHexVal={setHexVal}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}/>
    </div>
  );
}

export default App;
