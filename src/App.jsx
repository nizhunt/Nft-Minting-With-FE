import MainMint from "./MainMint";
import NavBar from "./NavBar";
import { useState } from "react";
import "./App.css";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <div className="overlay">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;
