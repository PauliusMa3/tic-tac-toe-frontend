import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import Form from "../components/Form";
import { createGame, ICreateGamePayload } from "../features/game/gameSlice";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
import Page from "../components/Page";

const NewGamePage = () => {
  const dispatch = useAppDispatch();
  let history = useHistory();
  const gameState = useAppSelector((state: RootState) => state.game);

  const onCreateNewGameSubmit = (data: ICreateGamePayload) => {
    dispatch(createGame(data));
  };

  const isLoading = gameState.status === "loading";
  if (!isLoading && gameState?.id) {
    history.push(`/game/${gameState?.id}`);
  }
  return (
    <Page>
      {isLoading ? (
        <Loader type="TailSpin" color="#0198E1" height={100} width={100} />
      ) : (
        <Form onSubmit={onCreateNewGameSubmit} />
      )}
    </Page>
  );
};

export default NewGamePage;
