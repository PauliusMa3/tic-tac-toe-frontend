import axios from "axios";
import { API_URL } from "../../constants";
import { ICreateGamePayload, IUpdateGameBoardPayload } from "./gameSlice";

export async function createNewGame(payload: ICreateGamePayload) {
  try {
    const res = await axios.post(`${API_URL}/game`, payload);
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function setPlayerMoveOnTheBoard(
  payload: IUpdateGameBoardPayload
) {
  try {
    const res = await axios.put(`${API_URL}/game`, payload);
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function getGameById(gameId: string) {
  try {
    const res = await axios.get(`${API_URL}/game/${gameId}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}
