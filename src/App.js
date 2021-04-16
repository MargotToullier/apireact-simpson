import './App.css';
import React, { useState } from 'react';
import SimpsonsQuote from './components/SimpsonsQuote.jsx';
import axios from 'axios';

const sample1 = [
  {
    quote:
      "Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
    character: 'Comic Book Guy',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970',
    characterDirection: 'Right',
  },
];

function App() {
  const [simpsons, setSimpson] = useState(sample1);

  const getSimpson = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')

      .then((response) => response.data)

      .then(function (simpsons) {
        setSimpson(simpsons);
      });
  };

  return (
    <div>
      <button type='button' onClick={getSimpson}>
        Click here
      </button>
      <SimpsonsQuote simpsons={simpsons} />
    </div>
  );
}

export default App;
