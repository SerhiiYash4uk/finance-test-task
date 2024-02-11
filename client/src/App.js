import React from 'react';
import { useSelector } from 'react-redux';

import { selectDeletedTickerList } from './redux/tickers';

import { Header, Main, Footer, Sidebar } from './components';

import './App.css';

export const App = () => {
  const deletedTickers = useSelector(selectDeletedTickerList);
  const widthFR = deletedTickers.length !== 0 ? '1fr 4fr' : '0fr 4fr';

  const myStyles = {
    minHeight: '100%',
    display: 'grid',
    grid: "'header header' 'sidebar main' 'footer footer'",
    gridTemplateColumns: widthFR,
  };

  return (
    <div className='App' style={myStyles}>
      <Header />
      <Main />
      {deletedTickers.length !== 0 && <Sidebar />}
      <Footer />
    </div>
  );
};
