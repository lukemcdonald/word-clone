import React from "react";

function GuessForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { guess } = event.target;
    onSubmit(guess.value.toUpperCase());
    guess.value = "";
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        minLength="5"
        maxLength="5"
        name="guess"
        placeholder="Guess a word"
        type="text"
      />
    </form>
  );
}

export default GuessForm;
