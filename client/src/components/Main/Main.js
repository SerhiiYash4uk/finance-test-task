import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectTickerList,
  selectUpdatedTime,
  setTickers,
} from '../../redux/tickers';

import { Loader, TickerList } from '..';

import { socket } from '../../socket';

import './Main.css';

export const Main = () => {
  const dispatch = useDispatch();

  const tickers = useSelector(selectTickerList);
  const timeToUpdate = useSelector(selectUpdatedTime);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    socket.emit('start', timeToUpdate);
    socket.on('ticker', (res) => {
      dispatch(setTickers(res));
      setLoading(false);
    });

    return () => {
      socket.off('ticker');
    };
  }, [dispatch, timeToUpdate]);

  return (
    <main className='main'>
      {loading ? <Loader /> : <TickerList tickers={tickers} />}
    </main>
  );
};
