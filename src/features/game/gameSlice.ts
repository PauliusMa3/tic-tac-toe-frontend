import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { createNewGame, getGameById, setPlayerMoveOnTheBoard } from "./gameApi";

export interface GameState {
  status: "idle" | "loading" | "failed";
  id: string;
  finished: boolean;
  gameBoard: IGameMove[];
  turn: IPlayerTurn;
  winner: string;
}

export interface IGameMove {
  position: number;
  player: string;
  symbol: string;
}

export interface IPlayerTurn {
  id?: string;
  name?: string;
}

const initialState: GameState = {
  status: "idle",
  id: "",
  gameBoard: [],
  finished: false,
  turn: {},
  winner: ""
};

export interface ICreateGamePayload {
  player1: string;
  player2: string;
}

export interface IUpdateGameBoardPayload {
  id: string;
  turn: IPlayerTurn;
  position: number;
}

export const setPlayerMove = createAsyncThunk(
  "game/setPlayerMove",
  async (position: number, { getState }) => {
    const gameState = selectGameState(getState() as RootState);

    console.log("gameState: turn  ", gameState.turn);
    const payload: IUpdateGameBoardPayload = {
      position,
      turn: gameState.turn,
      id: gameState.id
    };
    const response = await setPlayerMoveOnTheBoard(payload);
    return response;
  }
);

export const selectGameState = (state: RootState) => state.game;

export const getGame = createAsyncThunk(
  "game/getGame",
  async (gameId: string) => {
    const response = await getGameById(gameId);
    return response;
  }
);

export const createGame = createAsyncThunk(
  "game/create",
  async (payload: ICreateGamePayload) => {
    const response = await createNewGame(payload);
    return response;
  }
);

export const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setPlayerMove.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setPlayerMove.fulfilled, (state, action) => {
        state.status = "idle";
        const { _id: id, moves, finished, turn, winner } = action.payload;
        state.status = "idle";
        state.id = id;
        state.gameBoard = moves;
        state.finished = finished;
        state.turn = turn;
        state.winner = winner;
      })
      .addCase(getGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGame.fulfilled, (state, action) => {
        const { _id: id, moves, finished, turn, winner } = action.payload;
        console.log("winner: ", winner);
        state.status = "idle";
        state.id = id;
        state.gameBoard = moves;
        state.finished = finished;
        state.turn = turn;
        state.winner = winner;
      })
      .addCase(createGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createGame.fulfilled, (state, action) => {
        const { _id: id, moves, finished, turn } = action.payload;
        state.status = "idle";
        state.id = id;
        state.gameBoard = moves;
        state.finished = finished;
        state.turn = turn;
      });
  }
});

export default GameSlice.reducer;
