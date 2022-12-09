import { useState } from "react";
import { StyledBuyerForm } from "./style";

export const BuyerForm = ({ id, addBuyer, seatInfo }) => {


  const handleChange = (key, value) => {
    addBuyer(id, key, value);
  };

  return (
    <StyledBuyerForm>
      <div className="input">
        <label htmlFor="name">Nome do Comprador</label>
        <input
          data-test='client-name'
          value={seatInfo.nome}
          onChange={e => handleChange('nome', e.target.value)} 
          type="text" 
          id="name" 
          placeholder="Digite seu nome..."
          required 
        />
      </div>
      <div className="input">
        <label htmlFor="cpf">CPF do Comprador</label>
        <input
          data-test='client-cpf'
          value={seatInfo.cpf} 
          onChange={e => handleChange('cpf', e.target.value)} 
          type="text" 
          id="cpf" 
          placeholder="Digite seu CPF..." 
          required
        />
      </div>
    </StyledBuyerForm>
  );
};