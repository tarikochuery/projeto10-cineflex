import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList/MoviesList";
import axios from "axios";

const MOVIES_URL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies'

export const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(MOVIES_URL)
    .then(res => setMovies(res.data))
  }, [])

  return (
    <>
      <MoviesList movies={movies} />
    </>
  )
}