import { state } from "../data.js";
import { clearUI, renderBoard, renderMessage, renderRestartButton } from "../dom.js";

import { createHeader } from "../components/header.js";
import { handleCellClick } from "../handlers/handler.js";
export function handleRestart() {
  state.board = Array(9).fill("");
  state.currentPlayer = "X";
  state.gameOver = false;

  const app = document.getElementById("app");
  clearUI(app);
  app.appendChild(createHeader("Tic Tac Toe"));
  renderBoard(app, handleCellClick);
  renderMessage(app, `Turn: ${state.currentPlayer}`);
  renderRestartButton(app, handleRestart);
}