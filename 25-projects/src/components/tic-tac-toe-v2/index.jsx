import { useState } from "react";
import "./styles.css";

function Square({ children, isSelected, updateBoard, index }) {
	const classname = `square ${isSelected && "is-selected"}`;

	function handleClick() {
		updateBoard(index);
	}

	return (
		<button onClick={handleClick} type="button" className={classname}>
			{children}
		</button>
	);
}
const TURNS = {
	X: "x",
	O: "o",
};

const WINNER_COMBOS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export default function TicTacToeV2() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(TURNS.X);
	const [winner, setWinner] = useState(null);

	function updateBoard(index) {
		if (board[index] || winner) return;
		setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
		const newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);

		const newWinner = getWinner(newBoard);
		if (newWinner) {
			setWinner(newWinner);
		} else if (checkEndGame(newBoard)) {
			setWinner(false);
		}
	}

	function getWinner(boardToCheck) {
		for (const combo of WINNER_COMBOS) {
			const [a, b, c] = combo;
			if (
				boardToCheck[a] &&
				boardToCheck[a] === boardToCheck[b] &&
				boardToCheck[a] === boardToCheck[c]
			) {
				return boardToCheck[a];
			}
		}
		return null;
	}

	function resetGame() {
		setBoard(Array(9).fill(null));
		setTurn(TURNS.X);
		setWinner(null);
	}

	function checkEndGame(newBoard) {
		return newBoard.every((square) => square !== null);
	}

	return (
		<div className="board">
			<h1>TIC-TAC-TOE v2</h1>
			<div className="game">
				{board.map((_, index) => (
					<Square updateBoard={updateBoard} key={index} index={index}>
						{board[index]}
					</Square>
				))}
			</div>
			<div className="turn">
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</div>
			<div>
				{winner !== null && (
					<div className="winner">
						<div className="text">
							<h2>{winner === false ? "Draw" : "Winner is: "}</h2>
							<div className="win">{winner && <Square>{winner}</Square>}</div>
							<div>
								<button type="button" onClick={resetGame}>
									Empezar de Nuevo!
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
