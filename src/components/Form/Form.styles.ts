import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-color);
  width: min(90%, 600px);
  .error-message {
    font-size: 1rem;
    color: var(--color-error);
  }

  h2 {
    text-align: center;
  }

  fieldset {
    border: none;
    margin: 0;
  }

  form {
    display: grid;
    gap: 2rem;
  }
`;
