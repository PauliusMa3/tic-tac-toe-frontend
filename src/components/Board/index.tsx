import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { IGameMove, setPlayerMove } from "../../features/game/gameSlice";
import * as S from "./Board.styles";

const Board = () => {
  const dispatch = useAppDispatch();

  const { gameBoard, winner, status } = useAppSelector(
    (state: RootState) => state.game
  );

  const handleClick = (index: number): void => {
    if (index < 0 || index > 9 || winner || getSymbolByPosition(index)) return;
    dispatch(setPlayerMove(index));
  };

  const getSymbolByPosition = (position: number) => {
    const found = gameBoard.find(
      (item: IGameMove) => item.position === position
    );

    if (found) {
      return found.symbol;
    }
    return "";
  };

  const isLoading = status === "loading";

  return (
    <S.BoardContainer
      style={isLoading ? { pointerEvents: "none", opacity: "0.6" } : {}}
    >
      <S.BoardColumn>
        <S.Square onClick={() => handleClick(0)}>
          {getSymbolByPosition(0)}
        </S.Square>
        <S.Square onClick={() => handleClick(3)}>
          {getSymbolByPosition(3)}
        </S.Square>
        <S.Square onClick={() => handleClick(6)}>
          {getSymbolByPosition(6)}
        </S.Square>
      </S.BoardColumn>
      <S.BoardColumn>
        <S.Square onClick={() => handleClick(1)}>
          {getSymbolByPosition(1)}
        </S.Square>
        <S.Square onClick={() => handleClick(4)}>
          {getSymbolByPosition(4)}
        </S.Square>
        <S.Square onClick={() => handleClick(7)}>
          {getSymbolByPosition(7)}
        </S.Square>
      </S.BoardColumn>
      <S.BoardColumn>
        <S.Square onClick={() => handleClick(2)}>
          {getSymbolByPosition(2)}
        </S.Square>
        <S.Square onClick={() => handleClick(5)}>
          {getSymbolByPosition(5)}
        </S.Square>
        <S.Square onClick={() => handleClick(8)}>
          {getSymbolByPosition(8)}
        </S.Square>
      </S.BoardColumn>
    </S.BoardContainer>
  );
};

export default Board;
