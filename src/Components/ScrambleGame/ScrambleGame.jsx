import React from 'react';
import './ScrambleGame.css';

const wordList = ['grazac', 'abeokuta', 'java', 'ogun', 'css']

function ScrambleGame() {
  return (
    <main className='scramble'>
      <h1>Scramble Game</h1>
      <section className='scramble-content'>
        <div className='content-header'>
          <p>Hint:</p>
          <p>Time:</p>
        </div>
        <div className='content-input'>
          <input type='text' />
          <button>Enter </button>
        </div>
        <div className="content-buttons">
          <button>Hint</button>
          <button>Skip</button>
        </div>
      </section>
    </main>
  );
}

export default ScrambleGame;
