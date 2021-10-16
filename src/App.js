import React from 'react';
import Card from './Card';
import './App.css';

function App() {
  return (
    <>
      <div className="dashboard">
        <div className="card-container">
          <Card symbol="BTC" />
          <Card symbol="ETH" />
          <Card symbol="YFI" />
          <Card symbol="MKR" />
          <Card symbol="PAXG" />
          <Card symbol="AUTO" />
          <Card symbol="BNB" />
          <Card symbol="BCH" />
          <Card symbol="AAVE" />
        </div>
      </div>
    </>
  );
}

export default App;
