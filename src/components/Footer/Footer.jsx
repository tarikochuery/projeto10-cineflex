import { Movie } from "../Movie/Movie";
import { StyledFooter } from './style';

export const Footer = ({movieInfo, day}) => {
  const { title } = movieInfo
  return (
    <StyledFooter>
      <Movie movie={movieInfo} size='s' />
      <div>
        <p>{title}</p>
        {day && <p>{day.weekday} - {day.date}</p>}
      </div>
    </StyledFooter>
  );
};