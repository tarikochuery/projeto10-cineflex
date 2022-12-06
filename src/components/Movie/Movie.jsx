import { StyledMovie } from "./style";

export const Movie = ({ movie, size }) => {
  const { title, posterURL } = movie;
  return (
    <StyledMovie size={size}>
      <img src={posterURL} alt={title} />
    </StyledMovie>
  );
};