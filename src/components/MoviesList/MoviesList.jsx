import React from 'react';
import { Container } from '../../styles/Container';
import { Movie } from '../Movie/Movie';
import { StyledHome } from './style';

export const MoviesList = ({movies}) => {
  return (
    <Container>
      <p>Selecione o Filme</p>
      <StyledHome>
        {movies.map(movie =>
          <Movie
            movie={movie}
            key={movie.id}
          />
        )}
      </StyledHome>
    </Container>
  );
};
