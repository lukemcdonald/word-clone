import React from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleOnSubmit(newGuess) {
    console.log({ newGuess })
    setGuesses((prevGuesses) => [
      ...prevGuesses,
      newGuess
    ]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm onSubmit={handleOnSubmit} />
    </>
  );
}

export default Game;
