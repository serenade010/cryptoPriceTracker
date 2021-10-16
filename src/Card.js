import React from 'react';
import { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import './Card.css';

function Card({ symbol }) {
  const [price, setPrice] = useState(30000);
  const [changePercent, setChangePercent] = useState(0);
  const [bumpy, setBumpy] = useState();
  const symbolLower = symbol.toLowerCase();

  const fetchData = async () => {
    console.log('called');

    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}USDT`
    );
    const data = await response.json();
    const price = parseFloat(data.bidPrice).toFixed(2);
    setPrice((prev) => {
      if (prev) {
        setBumpy(prev - price);
        return price;
      } else {
        return price;
      }
    });
    setChangePercent(data.priceChangePercent);
  };

  useEffect(() => {
    fetchData();
    setInterval(fetchData, Math.random() * 5000 + 4000);
    // eslint-disable-next-line
  }, []);

  return bumpy && bumpy < 0 ? (
    <div className="card">
      <div className="info">
        <SVG src={`/images/${symbolLower}.svg`} className="svg"></SVG>
        <h3>{symbol}</h3>
      </div>
      <p className="higher" key={bumpy}>
        {price}
      </p>
      <div className="changeRate">
        <h5>24H</h5>
        {parseInt(changePercent) > 0 ? (
          <p className="posRate"> {` ${changePercent}%`}</p>
        ) : (
          <p className="negRate"> {` ${changePercent}%`}</p>
        )}
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="info">
        <SVG src={`/images/${symbolLower}.svg`} className="svg"></SVG>
        <h3>{symbol}</h3>
      </div>
      <p className="lower" key={bumpy}>
        {price}
      </p>
      <div className="changeRate">
        <h5>24H</h5>
        {parseInt(changePercent) > 0 ? (
          <p className="posRate"> {` ${changePercent}%`}</p>
        ) : (
          <p className="negRate"> {` ${changePercent}%`}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
