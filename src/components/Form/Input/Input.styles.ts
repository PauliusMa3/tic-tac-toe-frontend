import styled from "styled-components";

export const InputContainer = styled.div`
  display: grid;
  gap: 1rem;

  label {
    justify-self: start;
  }

  input {
    border: 1px solid var(--color-border);
    border-radius: 5px;
    padding: 0.8rem 1rem;
    font-size: 2rem;
    line-height: 2.6rem;
  }
`;
