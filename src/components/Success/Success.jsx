import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSuccess } from "./style";

export const Success = ({ bookedSeatsInfo }) => {
  const navigate = useNavigate();
  try {
    const { bookedSeats, showtimeInfo } = bookedSeatsInfo;
    const { compradores } = bookedSeats;

    return (
      <StyledSuccess>
        <strong>Pedido feito com sucesso!</strong>
        <div className="info-container">
          <strong>Filme e Sessão</strong>
          <p>{showtimeInfo.movie.title}</p>
          <p>{showtimeInfo.day.weekday} - {showtimeInfo.name}</p>
        </div>
        <div className="info-container">
          <strong>Ingressos</strong>
          {compradores.map(comprador => <p key={comprador.idAssento}>Assento {comprador.idAssento}</p>)}
        </div>
        <div className="info-container">
          <strong>Comprador(es)</strong>
          {compradores.map(comprador =>
            <div key={comprador.idAssento}>
              <p>Nome: {comprador.nome}</p>
              <p>CPF: {comprador.cpf}</p>
            </div>
          )}
        </div>
        <button className="go-home" onClick={() => navigate('/')}>Voltar para Home</button>
      </StyledSuccess>
    );
  } catch (error) {
    return <h1>Página não encontrada - 404</h1>
  }

};