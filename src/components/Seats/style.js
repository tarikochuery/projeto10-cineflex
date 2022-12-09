import styled from "styled-components";

export const StyledSeats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-bottom: 11.7rem;

  .seats-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.8rem 0.7rem;
  }

  .legends{
    display: flex;
    justify-content: space-around;

    width: 100%;
  }
  
  .legend-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .legend{
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
  }

  .legend-container p {
    font-size: 1.3rem;
  }

  .available{
    background: #C3CFD9;
    border: 1px solid #7B8B99;
  }

  .unavailable{
    background: #FBE192;
    border: 1px solid #F7C52B;
  }

  .selected{
    background: #1AAE9E;
    border: 1px solid #0E7D71;
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  button {
    width: 22.5rem;
    height: 4.2rem;
    background: #E8833A;
    border-radius: 3px;
    color: #fff;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;