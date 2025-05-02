# Tic Tac Toe

## The Tic Tac Toe project is a simple 3x3 grid-based game where two players can take turns and compete against each other.

- **User-Friendly Interface**: Clean and simple layout with a 3x3 grid for the game board, making it intuitive and easy to play.
- **Interactive Gameplay**: Players can take turns placing X and O on the grid, with the game detecting wins, draws, and allowing resets.
- **Essential Features**: The game provides a basic yet engaging experience without unnecessary complexity.

---

## Setup

- Create a repository for **Tic Tac Toe** project.
- Protect the main branch.
- Turn on **GitHub Pages** to host the game once it's ready.
- Open discussions on the project for collaboration, feature requests, and improvements.

---

## Home Page

### Header

This feature will be developed on the branch `header-implementation`.

#### HTML

- Create a `header` element to display the game's name ("Tic Tac Toe").
- Create a `div` with class `game-board` to contain the 3x3 grid.
- Create a `div` with class `turn-indicator` to show the current player's turn (X or O).
- Create a `button` with class `reset-button` to reset the game.

#### JavaScript

- Create a `gameBoard` variable to reference the game board container.
- Create an array `boardState` to represent the state of each cell in the grid (X, O, or empty).
- Create a `currentPlayer` variable to track whose turn it is (X or O).
- Create a `gameOver` flag to indicate if the game has finished (either through a win or draw).
- Implement a function to handle player moves, checking if the cell is empty, placing X or O, and updating the board state.
- Implement a function to check for a win or draw.
- Implement a function to reset the game, clearing the board and resetting all variables.

#### CSS

- Style the `game-board` class to create a responsive 3x3 grid layout.
- Style each `cell` within the grid to be a square with borders, padding, and text alignment.
- Style the `turn-indicator` to display the current player's turn at the top of the board.
- Style the `reset-button` to be a prominent button at the bottom, resetting the game when clicked.
- Ensure the layout is responsive for mobile and desktop views.

---

## Game Logic

### **Turn-taking**

#### JavaScript

- Track player turns in the `currentPlayer` variable.
- When a cell is clicked, update the board state, place either X or O, and switch the turn to the next player.
- Display the current player's turn using the `turn-indicator`.

#### CSS

- Style the current player's turn to stand out using different colors (e.g., blue for Player X and red for Player O).

---

## Win and Draw Detection

### **Win Condition**

#### JavaScript

- Implement a function to check for a win:
  - Check all rows, columns, and diagonals to see if one player has three of the same marks in a line.
  - Display a message indicating the winner.

### **Draw Condition**

#### JavaScript

- Implement a function to check for a draw:
  - If all cells are filled and no winner is found, display a message indicating a draw.

#### CSS

- Style the winner's line (if any) by adding a highlighted background to the winning cells.

---

## Reset Button

### **Reset Functionality**

#### JavaScript

- Implement the `resetGame` function to clear the board and reset all variables (`boardState`, `currentPlayer`, `gameOver`).
- Attach an event listener to the `reset-button` to trigger the reset function when clicked.

#### CSS

- Style the `reset-button` to stand out, making it easy for users to restart the game.

---

## Future Enhancements

- **AI Opponent**: Add functionality for users to play against a computer-controlled opponent.
- **Score Tracking**: Add a scoreboard to keep track of the number of wins for each player.
- **Player Name Inputs**: Allow users to input custom player names instead of default X and O labels.
- **Theming**: Add a light/dark mode toggle for better visual customization.

---