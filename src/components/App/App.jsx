import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Seats } from "../Seats/Seats";
import { Sessions } from "../Sessions/Sessions";
import { StyledApp } from "./style";

export function App() {
  return (
    <StyledApp>
      <Header />
      <Seats />
      <Footer />
    </StyledApp>
  );
}