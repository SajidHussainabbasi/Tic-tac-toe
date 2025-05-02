import { state } from "../data.js";
import { updateCell, renderMessage } from "../dom.js";
import { checkWinner } from "../utils/utils.js";

// ✅ Only one declaration of handleCellClick
export function handleCellClick(e) {
  const index = e.target.dataset.index;

  if (state.board[index] || state.gameOver) return;

  state.board[index] = state.currentPlayer;
  updateCell(index, state.currentPlayer);

  const result = checkWinner(state.board);

  if (result) {
    state.gameOver = true;
    renderMessage(
      document.getElementById("app"),
      result === "Draw" ? "It's a Draw!" : `${state.currentPlayer} Wins!`
    );
  } else {
    state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    renderMessage(document.getElementById("app"), `Turn: ${state.currentPlayer}`);
  }
}