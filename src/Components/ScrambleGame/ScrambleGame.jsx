import React, { useEffect, useState } from 'react';
import './ScrambleGame.css';

const wordList = ['grazac', 'abeokuta', 'java', 'ogun', 'css'];

function ScrambleGame() {
  const shuffleWord = (word) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };
  // console.log('shuffle', shuffleWord(word));

  // State Management
  const [shuffledWord, setShuffledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [correctWord, setCorrectWord] = useState('');
  const [feedBack, setFeedBack] = useState('');
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentwordIndex = Math.floor(Math.random() * wordList.length);
    const word = wordList[currentwordIndex];
    setCorrectWord(word);
    setShuffledWord(shuffleWord(word));
    setWordIndex(currentwordIndex);
    console.log("word index:" ,currentwordIndex);
  }, []);
  console.log('correctWord', shuffledWord, correctWord);

  const handleUserInput = (event) => {
    return setUserInput(event.target.value);
  };
  const handleSubmit = () => {
    // if user input === correct word display correct answer, els

    if (userInput.toLowerCase() === correctWord.toLowerCase()) {
      setFeedBack('Awesome Job');
      if (wordIndex + 1 < wordList.length) {
        const nextWordIndex = wordIndex + 1;
        setWordIndex(nextWordIndex);
        setShuffledWord(shuffleWord(wordList[nextWordIndex]));
        setCorrectWord(wordList[nextWordIndex]);
      }
    } else {
      setFeedBack('Wrong Guess');
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
        <h5>{feedBack}</h5>
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
