import React, { useState } from 'react';
import getJoke from '../api/jokeData';


const JokeGenny= () => {
  const [currentJoke, setCurrentJoke] = useState('');

  const generateJoke = async () => {
    try {
      const response = await fetch({getJoke});
      const data = await response.json();
      setCurrentJoke(`${data.setup} ${data.punchline}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Joke Generator</h1>
      <button onClick={generateJoke}>Generate Joke</button>
      {currentJoke && <p>{currentJoke}</p>}
    </>
  );
};

export default JokeGenny;
