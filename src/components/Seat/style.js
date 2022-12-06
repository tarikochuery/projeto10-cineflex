import styled from "styled-components";

export const StyledSeat = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  border: 1px solid ${props => props.color.border};
  background-color: ${props => props.color.background};
  font-size: 1.1rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`