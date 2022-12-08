import { useState } from "react";
import { StyledBuyerForm } from "./style";

export const BuyerForm = ({id}) => {
  const [seatInfo, setSeatInfo] = useState({idAssento: id, nome: '', cpf: ''})

  const handleChange = (key, value) => {
    setSeatInfo({...seatInfo, [key]: value})
  }

  console.log(seatInfo)

  return (
    <StyledBuyerForm>
      <div className="input">
        <label htmlFor="name">Nome do Comprador</label>
        <input value={seatInfo.nome} onChange={e => handleChange('nome', e.target.value)} type="text" id="name" placeholder="Digite seu nome..." />
      </div>
      <div className="input">
        <label htmlFor="cpf">CPF do Comprador</label>
        <input value={seatInfo.cpf} onChange={e => handleChange('cpf', e.target.value)} type="text" id="cpf" placeholder="Digite seu CPF..." />
      </div>
    </StyledBuyerForm>
  );
};