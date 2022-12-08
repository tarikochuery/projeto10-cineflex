import { StyledSessions } from './style';
import { Container } from '../../styles/Container';
import { Session } from '../Session/Session';
import { Footer } from '../Footer/Footer'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BackArrow } from '../BackArrow/BackArrow';

const BASE_URL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies'

export const Sessions = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState()

  useEffect(() => {
    axios.get(`${BASE_URL}/${id}/showtimes`)
    .then(res => setMovieInfo(res.data))
  }, [id])

  return (
    <Container>
      <BackArrow />
      <p>Selecione o horário</p>
      <StyledSessions>
        {movieInfo?.days.map(session => <Session session={session} key={session.id} />)}
      </StyledSessions>
      {movieInfo && <Footer movieInfo={movieInfo}/>}
    </Container>
  );
};