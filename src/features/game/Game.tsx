import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import ActionHistory from "../../components/ActionHistory";
import Board from "../../components/Board";
import * as S from "./Game.styles";
import Button from "../../components/Button";
import { useHistory } from "react-router";

const Game = () => {
  let history = useHistory();
  const { winner, gameBoard, finished } = useAppSelector(
    (state: RootState) => state.game
  );

  const getActionLogItems = (): string[] => {
    const actionLog: string[] = gameBoard.map(
      (gameMove) =>
        `Player ${gameMove.player} set ${gameMove.symbol} at position ${
          gameMove.position + 1
        }`
    );

    return actionLog;
  };
  return (
    <S.GameContainer>
      {winner && finished ? (
        <S.WinnerContainer>
          <h2>{`${winner} has won the game`}</h2>
          <Button
            onClick={() => {
              history.push({
                pathname: "/"
              });
            }}
          >
            Start New Game
          </Button>
        </S.WinnerContainer>
      ) : null}

      {!winner && finished ? (
        <S.WinnerContainer>
          <h2>It's a tie</h2>
          <Button
            onClick={() => {
              history.push({
                pathname: "/"
              });
            }}
          >
            Start New Game
          </Button>
        </S.WinnerContainer>
      ) : null}
      <Board />
      <ActionHistory actionHistoryItems={getActionLogItems()} />
    </S.GameContainer>
  );
};

export default Game;
