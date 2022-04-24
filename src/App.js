import './App.css';
//Bring in the required hooks and possible wallet states
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";

function App() {
  // Current wallet status, connect & disconnect functions, available connections
  const { status, connect, disconnect, availableConnectTypes } = useWallet();
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
  };
  // Let's take a look at what the starting states are!
  console.log("Wallet status is ", status);
  console.log("Available connection types:", availableConnectTypes);

  // Nothing changes here :D
  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>⚔ Goblin War ⚔</h1>
          <p>Only you can save us from Goblin town</p>
        </div>

      </header>

      <div>
        <img
          src="https://media.giphy.com/media/B19AYwNXoXtcs/giphy.gif"
          alt="Goblin gif"
        />
      </div>
        
      {/* Add it here */}
      {renderConnectButton()}
    </main>
  );
}

export default App;