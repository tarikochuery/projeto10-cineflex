import { useNavigate } from "react-router-dom";
import { StyledSuccess } from "./style";

export const Success = ({bookedSeatsInfo}) => {
  const { bookedSeats, showtimeInfo } = bookedSeatsInfo
  const {ids, name, cpf} = bookedSeats
  const navigate = useNavigate()

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
        {ids.map(id => <p key={id}>Assento {id}</p>)}
      </div>
      <div className="info-container">
        <strong>Comprador</strong>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </div>
      <button onClick={() => navigate('/')}>Voltar para Home</button>
    </StyledSuccess>
  )
}