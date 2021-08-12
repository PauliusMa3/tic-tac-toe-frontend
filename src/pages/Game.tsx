import { useAppDispatch } from "../app/hooks";
import { getGame } from "../features/game/gameSlice";
import Game from "../features/game/Game";
import { useParams } from "react-router";
import { useEffect } from "react";
import Page from "../components/Page";

type GameParams = {
  id: string;
};

const GamePage = () => {
  const dispatch = useAppDispatch();
  let { id } = useParams<GameParams>();
  useEffect(() => {
    if (id) {
      dispatch(getGame(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page>
      <Game />
    </Page>
  );
};

export default GamePage;
