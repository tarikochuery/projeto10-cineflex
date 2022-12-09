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

export const Seat = ({ seat, addSeat, removeSeat, isSeatSelected }) => {
  const { name, isAvailable } = seat;
  const [color, setColor] = useState(
    isAvailable ? AVAILABLE : UNAVAILABLE
  );

  const handleClick = () => {
    if (!isAvailable) {
      alert('Este assento não está disponível')
      return
    };

    if (isSeatSelected(name)) {
      if (window.confirm('Deseja realmente remover esse assento e apagar todos os dados?')){
        removeSeat(name)
        setColor(AVAILABLE)
      }
    } else {
      addSeat(name)
      setColor(SELECTED)
    }
    
  };
  return (
    <StyledSeat data-test='seat' onClick={handleClick} color={color}>
      {name}
    </StyledSeat>
  );
};