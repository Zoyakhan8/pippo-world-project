import { useEffect, useState } from "react";
import paws from "../../../assets/x-paw.png";
import fish from "../../../assets/o-fish.png";
import '../ui/TicTacToe.css';
import popSound from "../../../../public/Pop.mp3";
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
    // function to play sound
    const playPop = () => {
        const audio = new Audio(popSound);
        audio.currentTime = 0; // reset so it plays instantly
        audio.volume = 0.3;
        audio.play();
    };
    // function to play
    const handleClick = (index) => {
        if (!isPlayerTurn || board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = 'X';
        playPop();
        setBoard(newBoard);
        setIsPlayerTurn(false);
    };
    // Smarter AI move selection
    function getSmartMove(board, winPatterns) {
        // Try to win
        for (let [a, b, c] of winPatterns) {
            if (board[a] === 'O' && board[b] === 'O' && !board[c]) return c;
            if (board[a] === 'O' && board[c] === 'O' && !board[b]) return b;
            if (board[b] === 'O' && board[c] === 'O' && !board[a]) return a;
        }
        // Block player
        for (let [a, b, c] of winPatterns) {
            if (board[a] === 'X' && board[b] === 'X' && !board[c]) return c;
            if (board[a] === 'X' && board[c] === 'X' && !board[b]) return b;
            if (board[b] === 'X' && board[c] === 'X' && !board[a]) return a;
        }
        // Take center
        if (!board[4]) return 4;
        // Take corner
        const corners = [0, 2, 6, 8].filter(i => !board[i]);
        if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];
        // Otherwise random
        const emptyIndexes = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
        return emptyIndexes.length > 0 ? emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)] : null;
    }
    // function to actual play
        useEffect(() => {
            const result = checkWinner(board);
            if (result) {
                setWinner(result.winner);
                setWinningPattern(result.pattern);
                return;
            }
            if (!isPlayerTurn) {
                const smartMove = getSmartMove(board, winPatterns);
                if (smartMove !== null) {
                    setTimeout(() => {
                        const newBoard = [...board];
                        newBoard[smartMove] = 'O';
                        setBoard(newBoard);
                        playPop();
                        setIsPlayerTurn(true);
                    }, 500);
                }
            }
        }, [board, isPlayerTurn]);
    // reset whole game
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