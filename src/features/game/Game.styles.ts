import styled from "styled-components";

export const GameContainer = styled.div`
  display: grid;
  gap: 4rem;
  max-width: 100%;
  justify-items: center;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  width: min(90%, 20rem);
`;
