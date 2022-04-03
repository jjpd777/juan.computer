import React from 'react';
import './App.css';
import MetaMaskAuth from "./MetamaskLogin";


const mm = "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg";
function App() {
  return (
    <main>
      <div className="logoContainer">
        <img src={mm} height={90}/>
      </div>
      <div>
        <p>Do you want to find out?</p>
      </div>
      <MetaMaskAuth onAddressChanged={address => {}}/>
    </main>
  );
}

export default App;