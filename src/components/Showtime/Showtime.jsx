import { StyledShowtime } from "./style";

export const Showtime = ({ showtime }) => {
  const { name, id } = showtime;

  return (
    <StyledShowtime>
      <p>{name}</p>
    </StyledShowtime>
  );
};