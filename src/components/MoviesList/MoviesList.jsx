import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/Container';
import { Movie } from '../Movie/Movie';
import { StyledHome } from './style';

export const MoviesList = ({movies}) => {
  return (
    <Container>
      <p>Selecione o Filme</p>
      <StyledHome>
        {movies.map(movie =>
        <Link to={`/sessoes/${movie.id}`} data-test='movie' key={movie.id}>
          <Movie
            movie={movie}
          />
        </Link>
        )}
      </StyledHome>
    </Container>
  );
};
