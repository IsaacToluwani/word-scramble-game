import React, { useEffect, useState } from 'react';
import './ScrambleGame.css';

const wordList = ['grazac', 'abeokuta', 'java', 'ogun', 'css'];

function ScrambleGame() {
  const shuffleWord = (word) => {
    return word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
  };
  // console.log('shuffle', shuffleWord(word));

  // State Management
  const [shuffledWord, setShuffledWord] = useState(shuffleWord(wordList[0]));
  const [userInput, setUserInput] = useState('');
  const [correctWord, setCorrectWord] = useState('');

  useEffect(() => {
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    setCorrectWord(word);
    setShuffledWord(shuffleWord(word));
  }, []);
  console.log('correctWord', shuffledWord, correctWord);

  const handleUserInput = (event) => {
    return setUserInput(event.target.value);
  };
  const handleSubmit = () => {
    // if user input === correct word display correct answer, els

    if (userInput === correctWord) {
      <h1>Correct Guess</h1>;
    } else {
      <h1>Wrong Guess</h1>;
    }
  };
  return (
    <main className='scramble'>
      <h1>Scramble Game</h1>
      <section className='scramble-content'>
        <div className='content-header'>
          <p>Hint:</p>
          <p>Time:</p>
        </div>
        <h4>Scrambled Word: {shuffledWord}</h4>
        <div className='content-input'>
          <input
            type='text'
            placeholder='Your Guess'
            value={userInput}
            onChange={handleUserInput}
          />
          <button onClick={handleSubmit}>Enter </button>
        </div>
        <div className='content-buttons'>
          <button>Hint</button>
          <button>Skip</button>
        </div>
      </section>
    </main>
  );
}

export default ScrambleGame;
