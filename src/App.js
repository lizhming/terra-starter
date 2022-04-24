import './App.css';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import WalletAddress from './components/WalletAddress';

// Here's the new import for the file we just added
import Menu from './components/Menu';
import { Link } from 'react-router-dom';

function App() {
  const { status, connect, disconnect, availableConnectTypes } = useWallet();

  console.log("Wallet status is ", status);
  console.log("Available connection types:", availableConnectTypes);

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect wallet
          </button>
        </div>
      );
    }
    else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };
  // return (
  //   <main className="App">
  //     <header>
  //       <Link to="/" className="home-link">
  //         <div className="header-titles">
  //           <h1>⚔ Goblin War ⚔️</h1>
  //           <p>Only you can save us from Goblin town</p>
  //         </div>
  //       </Link>
  //       <WalletAddress />
  //     </header>

  //     <div className="score-board-container">
  //       <h3>Scoreboard</h3>
  //       {/* If loading, show loading, else render */}
  //       {loading ? (
  //         <div>Loading...</div>
  //       ) : (
  //         renderScores(scores)
  //       )}
        
  //       <div></div>
  //     </div>
  //   </main>
  // );
  return (
    <main className="App">
      <header>
        <Link to="/" className="home-link">
          <div className="header-titles">
            <h1>⚔ Goblin War ⚔</h1>
            <p>Only you can save us from Goblin town</p>
          </div>
          <WalletAddress />
        </Link>
      </header>

      {/* If not connected, show the goblin GIF! */}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
          <img
            src="https://media.giphy.com/media/B19AYwNXoXtcs/giphy.gif"
            alt="Goblin gif"
          />
        </div>
      )}

      {/* Show the menu after connection */}
      {status === WalletStatus.WALLET_CONNECTED && (
          <div className="game-menu-container">
            <Menu />
          </div>
        )}
        

      {renderConnectButton()}
    </main>
  );
}

export default App;