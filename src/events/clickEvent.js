import { handleCellClick } from "../handlers/handler.js";

export function attachCellClick() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", handleCellClick);
  });
}