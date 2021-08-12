import * as S from "./Input.styles";

interface IProps {
  label: string;
  name: string;
  register: any;
  error: any;
}

const Input = ({ label, register, name, error, ...rest }: IProps) => {
  return (
    <S.InputContainer>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...register(name)} {...rest} />
      {error && (
        <p className="error-message" role="alert">
          {error.message}
        </p>
      )}
    </S.InputContainer>
  );
};

export default Input;
