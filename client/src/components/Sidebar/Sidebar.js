import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTicker, selectDeletedTickerList } from '../../redux/tickers';

import { tickerNames } from '../../constants';

import './Sidebar.css';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const deletedTickers = useSelector(selectDeletedTickerList);

  const addToWatchingGroup = (ticker) => {
    dispatch(addTicker(ticker));
  };

  return (
    <aside className='sidebar'>
      <h1 className='sidebar-title'>Removed tickers:</h1>
      {deletedTickers.map((ticker) => (
        <div className='ticker-container' key={ticker.ticker}>
          <h1 className='tickerName'>{tickerNames[ticker.ticker]}</h1>
          <button
            className='add-button'
            onClick={() => {
              addToWatchingGroup(ticker);
            }}>
            &#43;
          </button>
        </div>
      ))}
    </aside>
  );
};
