import styled from "styled-components";

export const Square = styled.button`
  border: 6px solid var(--color-primary);
  border-radius: 10px;
  color: var(--color-secondary);
  font-size: 5rem;
  font-weight: 700;
  opacity: 1;
  transition: opacity linear 0.3s;
  cursor: pointer;
  width: 10rem;
  height: 10rem;

  background-color: #34495e;

  &:hover {
    opacity: 0.9;
  }
`;

export const BoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 32rem;
  height: 32rem;
  padding: 5px;

  div[disabled] {
    pointer-events: none;
    opacity: 0.7;
  }
`;
