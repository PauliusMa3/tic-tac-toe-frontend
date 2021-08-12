import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  background: var(--color-primary);
  color: var(--color-secondary);
  opacity: 1;
  transition: opacity linear 0.3s;
  width: 100%;
  cursor: pointer;
  min-height: 4.4rem;
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.7;
  }
`;
