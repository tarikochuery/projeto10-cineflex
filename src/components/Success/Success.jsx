import { useNavigate } from "react-router-dom";
import { StyledSuccess } from "./style";

export const Success = ({ bookedSeatsInfo }) => {
  const navigate = useNavigate();



  if (bookedSeatsInfo) {
    const { bookedSeats, showtimeInfo } = bookedSeatsInfo;
    const { compradores } = bookedSeats;
    return (
      <StyledSuccess>
        <strong>Pedido feito com sucesso!</strong>
        <div data-test='movie-info' className="info-container">
          <strong>Filme e Sessão</strong>
          <p>{showtimeInfo.movie.title}</p>
          <p>{showtimeInfo.day.date} - {showtimeInfo.name}</p>
        </div>
        <div data-test='seats-info' className="info-container">
          <strong>Ingressos</strong>
          {compradores.map(comprador => <p key={comprador.idAssento}>Assento {comprador.seatNumber}</p>)}
        </div>
        <div data-test='client-info' className="info-container">
          <strong>Comprador(es)</strong>
          {compradores.map(comprador =>
            <div key={comprador.idAssento}>
              <p>Nome: {comprador.nome}</p>
              <p>CPF: {comprador.cpf}</p>
            </div>
          )}
        </div>
        <button data-test='go-home-btn' className="go-home" onClick={() => navigate('/')}>Voltar para Home</button>
      </StyledSuccess>
    );
  };

  return (<h1>Página não encontrada - 404</h1>);

};