import styled from "styled-components";

export const GameContainer = styled.div`
  display: grid;
  gap: 4rem;
  place-items: center;
  max-width: 100%;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
