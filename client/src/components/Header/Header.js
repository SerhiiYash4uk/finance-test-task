import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUpdatingTime } from '../../redux/tickers';

import { socket } from '../../socket';

import { Button } from '..';

import {
  LOGO_TEXT,
  THOUSAND_MS,
  TIME_TO_UPDATE_5s,
  BUTTON_LIST,
} from '../../constants';

import './Header.css';

export const Header = () => {
  const dispatch = useDispatch();

  const reloader = () => window.location.reload();
  const [activeButton, setActiveButton] = useState(TIME_TO_UPDATE_5s);

  const setTimer = (time) => {
    setActiveButton(time);
    dispatch(changeUpdatingTime(time));

    socket.disconnect();
    socket.connect(time);
  };

  return (
    <header className='header'>
      <h1 className='logo' onClick={reloader}>
        {LOGO_TEXT}
      </h1>
      <div className='interval-button-container'>
        {BUTTON_LIST.map((interval) => (
          <Button
            key={interval}
            title={interval}
            value={interval / THOUSAND_MS + ' sec.'}
            isActive={activeButton === interval}
            onClick={() => {
              setTimer(interval);
            }}
          />
        ))}
      </div>
    </header>
  );
};
