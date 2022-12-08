import styled from "styled-components";

export const StyledBuyerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;

  width: 100%;

  .input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-size: 1.8rem;
  }

  .input input {
    outline: none;
    padding: 0.5rem;
    height: 5.1rem;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
  }

  .input input::placeholder {
    font-style: italic;
  }
`;