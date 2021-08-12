import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Input";
import * as S from "./Form.styles";
import Button from "../Button";

const schema = yup.object().shape({
  player1: yup.string().trim().typeError("You must enter player 1 name"),
  player2: yup.string().trim().required("You must enter player 2 name")
});

export interface IFormData {
  player1: string;
  player2: string;
}

interface IFormProps {
  onSubmit: (formData: IFormData) => void;
}

const Form = ({ onSubmit }: IFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onFormSubmit = (formData: IFormData) => {
    onSubmit(formData);
    reset();
  };

  return (
    <S.FormContainer>
      <h2>Please Enter player names</h2>
      <fieldset disabled={isSubmitting}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Input
            name={"player1"}
            label="Player 1"
            register={register}
            error={errors["player1"]}
          />

          <Input
            name={"player2"}
            label="Player 2"
            register={register}
            error={errors["player2"]}
          />
          <Button type="submit">Start new game</Button>
        </form>
      </fieldset>
    </S.FormContainer>
  );
};

export default Form;
