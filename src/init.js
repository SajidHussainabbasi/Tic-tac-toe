import { createHeader } from "./components/header.js";
import { renderBoard, renderMessage, renderRestartButton } from "./dom.js";
import { handleCellClick } from "./handlers/handler.js"; // ✅ Import ONCE
import { handleRestart } from "./handlers/restartHandler.js";
import { state } from "./data.js";

const app = document.getElementById("app");

app.innerHTML = "";
app.appendChild(createHeader("Tic Tac Toe"));
renderBoard(app, handleCellClick);
renderMessage(app, `Turn: ${state.currentPlayer}`);
renderRestartButton(app, handleRestart);