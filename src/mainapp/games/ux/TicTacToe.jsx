import { useEffect, useState } from "react";
import paws from "../../../assets/x-paw.png";
import fish from "../../../assets/o-fish.png";
import '../ui/TicTacToe.css'
export const TicTacToe = () => {
    const intialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(intialBoard);
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [winningPattern, setWinningPattern] = useState(null);
    //creating win pattern to check for further use
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    //creating an function which check wins from above win pattern
    function checkWinner(currentBoard) {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return { winner: currentBoard[a], pattern };
            }
        }
        if (currentBoard.every(cell => cell)) return { winner: 'draw', pattern: null };
        return null;
    }
    const handleClick = (index) => {
        if (!isPlayerTurn || board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = 'X';
        setBoard(newBoard);
        setIsPlayerTurn(false);
    };
    useEffect(() => {
        const result = checkWinner(board);
        if (result) {
            setWinner(result.winner);
            setWinningPattern(result.pattern);
            return;
        }
        if (!isPlayerTurn) {
            const emptyIndexes = board.map((val, idx) => val === null ?
                idx : null).filter(Boolean);
            if (emptyIndexes.length > 0) {
                const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
                setTimeout(() => {
                    const newBoard = [...board];
                    newBoard[randomIndex] = 'O';
                    setBoard(newBoard);
                    setIsPlayerTurn(true);
                }, 500)
            }
        }
    }, [board, isPlayerTurn]);
    const resetGame = () => {
        setBoard(intialBoard);
        setIsPlayerTurn(true);
        setWinner(null);
        setWinningPattern(null);
    }
    return (
        <section className="game1-section">
            <section className="game1-container">
                <div className="game1-title">
                    <h2> TIC TAC TOE</h2>
                </div>
                <div className="game1-grid">
                    {board.map((cell, index) => (
                        <div key={index} className="cell" onClick={() => handleClick(index)}>
                            {cell === 'X' && <img src={paws} alt="treat" />}
                            {cell === 'O' && <img src={fish} alt="paw" />}
                        </div>
                    ))}
                    {winningPattern && (
                        <div className={`winning-line-wrapper line-${winningPattern.join("")}`}>
                            <div className="winning-line" />
                        </div>
                    )}
                     </div>
                    {winner && (
                        <div className="game1-result">
                            {winner === 'draw' ? "It's a draw!" : `${winner === 'X' ? 'Paw' : 'Treat'} wins!`}
                            <button className="game1-button" onClick={resetGame}>Play Again</button>
                        </div>
                    )}
            </section>
        </section >
    )
}