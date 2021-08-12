import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import ActionHistory from "../../components/ActionHistory";
import Board from "../../components/Board";
import * as S from "./Game.styles";
import Button from "../../components/Button";

const Game = () => {
  const { winner, gameBoard, finished, turn } = useAppSelector(
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

  const getGameMessage = (
    winner: string,
    finished: boolean,
    playerTurnName: string | undefined
  ) => {
    if (winner) {
      return `${winner} has won the game`;
    }

    if (!finished && playerTurnName) {
      return `Next Move: ${playerTurnName}`;
    }
    return `It's a tie`;
  };
  return (
    <S.GameContainer>
      <S.WinnerContainer>
        <h2>{getGameMessage(winner, finished, turn.name)}</h2>
        <Button
          disabled={!finished}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Start New Game
        </Button>
      </S.WinnerContainer>
      <Board />
      <ActionHistory actionHistoryItems={getActionLogItems()} />
    </S.GameContainer>
  );
};

export default Game;
