import { Link } from "react-router-dom";
import { StyledShowtime } from "./style";

export const Showtime = ({ showtime }) => {
  const { name, id } = showtime;
  return (
    <Link to={`/assentos/${id}`}>
      <StyledShowtime>
        <p>{name}</p>
      </StyledShowtime>
    </Link>
  );
};