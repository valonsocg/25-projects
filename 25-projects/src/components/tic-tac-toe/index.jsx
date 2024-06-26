import { useEffect, useState } from "react";
import "./styles.css";

function Square({ value, onClick }) {
	return (
		<button onClick={onClick} className="square" type="button">
			{value}
		</button>
	);
}

export default function TicTacToe() {
	const [squares, setSquares] = useState(Array(9).fill(""));
	const [isX, setIsX] = useState(true);
	const [status, setStatus] = useState("");

	function handleClick(i) {
		const cpySquares = [...squares];
		if (getWinner(cpySquares) || cpySquares[i]) return;
		cpySquares[i] = isX ? "X" : "O";
		setIsX(!isX);
		setSquares(cpySquares);
	}

	function getWinner(squares) {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
			[0, 3, 6],
			[1, 4, 7],
		];

		for (let i = 0; i < winningPatterns.length; i++) {
			const [x, y, z] = winningPatterns[i];
			if (
				squares[x] &&
				squares[x] === squares[y] &&
				squares[x] === squares[z]
			) {
				return squares[x];
			}
		}
		return null;
	}

	function handleRestart() {
		setIsX(true);
		setSquares(Array(9).fill(""));
	}

	useEffect(() => {
		const winner = getWinner(squares);
		if (winner) {
			setStatus(`Winner is ${winner}`);
		} else if (squares.every((item) => item !== "")) {
			setStatus("This is a draw! Play again!");
		} else {
			setStatus(`Next player is ${isX ? "X" : "O"} `);
		}
	}, [squares, isX]);

	return (
		<div className="tic-tac-toe-container">
			<div className="row">
				<Square value={squares[0]} onClick={() => handleClick(0)} />
				<Square value={squares[1]} onClick={() => handleClick(1)} />
				<Square value={squares[2]} onClick={() => handleClick(2)} />
			</div>
			<div className="row">
				<Square value={squares[3]} onClick={() => handleClick(3)} />
				<Square value={squares[4]} onClick={() => handleClick(4)} />
				<Square value={squares[5]} onClick={() => handleClick(5)} />
			</div>
			<div className="row">
				<Square value={squares[6]} onClick={() => handleClick(6)} />
				<Square value={squares[7]} onClick={() => handleClick(7)} />
				<Square value={squares[8]} onClick={() => handleClick(8)} />
			</div>
			<h1>{status}</h1>
			<button type="button" onClick={handleRestart}>
				Restart
			</button>
		</div>
	);
}
