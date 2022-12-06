import React from 'react';
import { Showtime } from '../Showtime/Showtime';
import { StyledSession } from './style';

export const Session = ({ session }) => {
  const { weekday, date, showtimes } = session;
  return (
    <StyledSession>
      <p>{weekday} - {date}</p>
      <div>
        {showtimes.map(showtime => <Showtime showtime={showtime} />)}
      </div>
    </StyledSession>
  );
};