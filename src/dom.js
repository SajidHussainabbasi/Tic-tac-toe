export function renderBoard(container, clickHandler) {
  const board = document.createElement("div");
  board.className = "board";

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.addEventListener("click", clickHandler);
    board.appendChild(cell);
  }

  container.appendChild(board);
}

export function renderMessage(container, message) {
  let messageEl = container.querySelector(".message");
  if (!messageEl) {
    messageEl = document.createElement("div");
    messageEl.className = "message";
    container.appendChild(messageEl);
  }
  messageEl.textContent = message;
}

export function updateCell(index, value) {
  const cell = document.querySelector(`.cell[data-index="${index}"]`);
  if (cell) cell.textContent = value;
}

export function renderRestartButton(container, onClick) {
  let btn = container.querySelector(".restart-button");
  if (!btn) {
    btn = document.createElement("button");
    btn.className = "restart-button";
    btn.textContent = "Restart Game";
    btn.addEventListener("click", onClick);
    container.appendChild(btn);
  }
}

export function clearUI(container) {
  container.innerHTML = "";
}