import { useState } from "react";
import { StyledSeat } from "./style";

const SELECTED = {
  border: '#0E7D71',
  background: '#1AAE9E'
};

const UNAVAILABLE = {
  border: '#F7C52B',
  background: '#FBE192'
};

const AVAILABLE = {
  border: '#808F9D',
  background: '#C3CFD9'
};

export const Seat = ({ seat }) => {
  const { name, isAvailable } = seat;
  const [color, setColor] = useState(
    isAvailable ? AVAILABLE : UNAVAILABLE
  );
  let selected = false

  const handleClick = () => {
    if (!isAvailable) return;

    setColor(selected ? AVAILABLE : SELECTED);
    selected = !selected
  };
  return (
    <StyledSeat onClick={handleClick} color={color}>
      {name}
    </StyledSeat>
  );
};