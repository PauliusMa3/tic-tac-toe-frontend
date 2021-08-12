import styled from "styled-components";

export const ActionHistoryContainer = styled.div`
  padding: 2rem;
  box-shadow: var(--shadow-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;

  h2 {
    text-align: center;
  }
`;

export const ActionHistoryList = styled.ul`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`;
