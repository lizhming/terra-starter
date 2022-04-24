import React, { useState, useEffect } from "react";
import * as execute from '../contract/execute';
import { useConnectedWallet } from '@terra-money/wallet-provider';

const Play = () => {
  const connectedWallet = useConnectedWallet();
  const playTime = 15;

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(playTime);

  const submitScore = async () => {
    if (connectedWallet && connectedWallet.network.name === 'testnet') {
      // This will return the transaction object on confirmation
      const tx = await execute.setScore(connectedWallet, score);
      console.log(tx);
      // Once the transaction is confirmed, we let the user know
      alert('Score submitted!');
    }
  };

  return (
    <div className="score-board-container">
      <div className="play-container">
        <span>Score: {score}</span>
        <span>Fight!</span>
        <span>Time left: {time} s</span>
      </div>

      {/* Button to manually set score for testing */}
      <button className="cta-button connect-wallet-button" onClick={() => setScore(score => score + 1)}>+1 score</button>

      {/* Button to submit score to be removed later don't be cheater >:(  */}
      <button className="cta-button connect-wallet-button" onClick={submitScore}>Submit score</button>
    </div>
  )
}

export default Play;