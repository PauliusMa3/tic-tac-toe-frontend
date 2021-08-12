import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  background: var(--color-primary);
  color: var(--color-secondary);
  opacity: 1;
  transition: opacity linear 0.3s;
  max-width: 50%;
  cursor: pointer;
  min-height: 4.4rem;
  &:hover {
    opacity: 0.8;
  }
`;
