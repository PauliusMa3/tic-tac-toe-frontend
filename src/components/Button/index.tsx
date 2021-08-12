import * as S from "./Button.style";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
}

const Button = ({ children, ...rest }: IProps) => {
  return <S.StyledButton {...rest}>{children}</S.StyledButton>;
};

export default Button;
