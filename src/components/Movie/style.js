import styled from "styled-components";

export const StyledMovie = styled.div`
  width: ${props => props.size === 's' ? '6.4rem' : '14.5rem'};
  height: ${props => props.size === 's' ? '8.9rem' : '20.9rem'};
  padding: 0.8rem;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: #ffffff;

  img {
    width: 100%;
  }
`;