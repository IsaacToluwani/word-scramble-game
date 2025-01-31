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
  console.log('shuffle', shuffleWord(wordList[0]));

  // State Management
  const [shuffledWord, setShuffledWord] = useState(shuffleWord(wordList[0]));
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    setShuffledWord(shuffleWord(wordList[0]));
  }, []);

  const handleUserInput = (event) => {
    return setUserInput(event.target.value);
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
          <button>Enter </button>
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
