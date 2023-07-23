import React from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessForm from '../GuessForm/GuessForm';

const answer = sample(WORDS);
console.info({ answer });

function Game() {

  return (
    <GuessForm />
  );
}

export default Game;
