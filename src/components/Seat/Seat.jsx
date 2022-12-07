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

let selected = false

export const Seat = ({ seat, addSeat, removeSeat }) => {
  const { name, isAvailable } = seat;
  const [color, setColor] = useState(
    isAvailable ? AVAILABLE : UNAVAILABLE
  );

  const handleClick = () => {
    if (!isAvailable) {
      alert('Este assento não está disponível')
      return
    };

    setColor(selected ? AVAILABLE : SELECTED);
    if (selected) {
      removeSeat(name)
    } else {
      addSeat(name)
    }
    selected = !selected
  };
  return (
    <StyledSeat onClick={handleClick} color={color}>
      {name}
    </StyledSeat>
  );
};