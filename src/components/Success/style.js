import styled from "styled-components";

export const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 4rem;
  width: 100%;

  & > strong {
    font-size: 2.4rem;
    color: #247A6B;
    text-align: center;
    margin-bottom: 4rem;
  }

  .info-container {
    margin-bottom: 3rem;
    align-self: flex-start;
  }

  .info-container strong {
    font-size: 2.4rem;
  }

  .info-container p {
    font-size: 2.2rem;
  }

  .go-home {
    width: 100%;
    max-width: 22.5rem;
    background-color: #E8833A;
    color: #fff;
    height: 4.2rem;
    border: none;
    border-radius: 0.3rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
`