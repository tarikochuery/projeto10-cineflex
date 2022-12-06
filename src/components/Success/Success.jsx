import { StyledSuccess } from "./style";

export const Success = () => {
  return (
    <StyledSuccess>
      <strong>Pedido feito com sucesso!</strong>
      <div className="info-container">
        <strong>Filme e Sessão</strong>
        <p>Nome do Filme</p>
        <p>Sessão do Filme</p>
      </div>
      <div className="info-container">
        <strong>Ingressos</strong>
        <p>Assento</p>
        <p>Assento</p>
      </div>
      <div className="info-container">
        <strong>Comprador</strong>
        <p>Nome</p>
        <p>CPF</p>
      </div>
      <button>Voltar para Home</button>
    </StyledSuccess>
  )
}