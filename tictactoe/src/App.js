import "./App.css";
import { useState } from "react";

// Dette er en array med 9 tomme indexer. samme som: [null, null, null, ... osv]
const initialBoard = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const detectWinner = (board) => {
  for (const combination of winningCombinations) {
    const [first, second, third] = combination;
    if (
      board[first] &&
      board[first] === board[second] &&
      board[first] === board[third]
    ) {
      return {
        winner: board[first],
        winningTiles: [first, second, third],
      };
    }
  }
  return {
    winner: null,
    winningTiles: [],
  };

  function App() {
    const [player, setPlayer] = useState(null);
    const [players, setPlayers] = useState({ playerOne: "", playerTwo: "" });
    const [board, setBoard] = useState(initialBoard);
    const [winner, winningTiles] = detectWinner(board);

    const addPlayer = (event) => {
      const inputName = event.target.name;
      const inputValue = event.target.value;

      setPlayers((prev) => ({ ...prev, [inputName]: inputValue }));
    };
    const handleBoardClick = (index) => {
      // logger ut indexen på den tilen som er trykket på
      console.log(index);
      // Sjekker om tile er "ledig". Kan ikke bruke tiles som er trykket på
      if (board[index] || winner) {
        return;
      }
      const currentBoard = [...board];
      currentBoard[index] = player;
      setBoard(currentBoard);
      // Endrer spillers tur
      player === players.playerOne
        ? setPlayer(players.playerTwo)
        : setPlayer(players.playerOne);
      console.log(player);
    };

    const startGame = (event) => {
      event.preventDefault();
      setPlayer(players.playerOne);
    };

    return (
      <>
        <h1>Test your might</h1>
        <form onSubmit={startGame}>
          <label htmlFor="playerOne">Player 1 name: </label>
          <input
            name="playerOne"
            id="playerOne"
            type="text"
            value={players.playerOne}
            onChange={addPlayer}
          />
          <label htmlFor="playerTwo">Player 2 name: </label>
          <input
            name="playerTwo"
            id="playerTwo"
            type="text"
            value={players.playerTwo}
            onChange={addPlayer}
          />
          <button type="submit">Start game</button>
        </form>
        {player ? <h2>{player}'s turn</h2> : null}
        {board?.length > 0 ? (
          <ul id="board">
            {board.map((tile, index) => (
              <li className="tile" key={index}>
                <button
                  className="tileBtn"
                  type="button"
                  onClick={() => handleBoardClick(index)}
                >
                  {tile || index}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        <section>
          {winner ? (
            <>
              <h3>{winner} vant spillet!</h3>
              <button type="button" onClick={resetGame}>
                Ny runde
              </button>
            </>
          ) : null}
        </section>
      </>
    );
  }
};
export default App;
