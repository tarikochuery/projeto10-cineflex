import { Movie } from "../Movie/Movie";
import { StyledFooter } from './style';

export const Footer = () => {
  return (
    <StyledFooter>
      <Movie movie={{
        id: 1,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
      }} size='s' />
      <div>
        <p>Enola Homes</p>
        <p></p>
      </div>
    </StyledFooter>
  );
};