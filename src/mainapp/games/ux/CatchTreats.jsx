import { useEffect, useState, useRef } from 'react';
import '../ui/CatchTreats.css';
import treat1 from "../../../assets/chicken.png";
import treat2 from "../../../assets/star.png";
import treat3 from "../../../assets/mouse.png";
import treat4 from "../../../assets/bug.png";
import treat5 from "../../../assets/o-fish.png";
import game2 from "../../../assets/game2.png";
import missSound from "../../../assets/missed-treats.mp3"; 
import catchSound from "../../../assets/catch.m4a"; 
import { PawLives } from './PawLives';

export const CatchTreats = () => {
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [treats, setTreats] = useState([]);
    const [playerX, setPlayerX] = useState(250);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const playerWidth = 150;
    const playerHeight = 150;
    const treatSize = 53;
    const treatImages = [treat1,treat2,treat3,treat4,treat5];
    // functions for sound effects
    // sound:-catch
    const playcatch = () => {
            const audio = new Audio(catchSound);
            audio.currentTime = 0; // reset so it plays instantly
             audio.volume = 0.3;
            audio.play();
        };
    // sound:-missed
     const playmissed = () => {
            const audio = new Audio(missSound);
            audio.currentTime = 0; // reset so it plays instantly
             audio.volume = 0.1;
            audio.play();
        };
    // Spawn treats
    useEffect(() => {
        if (!isPlaying || isGameOver) return;
        const spawnInterval = setInterval(() => {
            // it randomly throw treats images
            const randomImage = treatImages[Math.floor(Math.random() * treatImages.length)];
            setTreats(prev => [
                ...prev,//Copy all the existing treats from the previous state
                { id: Date.now() + Math.random(), x: Math.random() * (600 - treatSize), y: 0, img: randomImage }
            ]);//Random horizontal position,start at top y=0 and Use a randomly chosen image for the treat
        }, 1000);
        return () => clearInterval(spawnInterval);
    }, [isPlaying, isGameOver]);

    // Fall movement + missed treat check
    const missedTreatsRef = useRef(0);

    useEffect(() => {
        if (!isPlaying || isGameOver) return;

        const fallInterval = setInterval(() => {
            setTreats(prev => {
                let updatedTreats = [];
                let missedCount = 0;

                for (let treat of prev) {
                    let newY = treat.y + 7;

                    if (newY > 250) {
                        playmissed();
                        missedCount++;
                        // do not add treat, it’s missed
                    } else {
                        updatedTreats.push({ ...treat, y: newY });
                    }
                }

                missedTreatsRef.current = missedCount;
                return updatedTreats;
            });

            if (missedTreatsRef.current > 0) {
                setLives(l => Math.max(l - 1, 0)); // Only remove 1 life per tick even if missedCount > 1
                missedTreatsRef.current = 0;
            }
        }, 50);

        return () => clearInterval(fallInterval);
    }, [isPlaying, isGameOver]);

    // Collision detection
    useEffect(() => {
        if (!isPlaying || isGameOver) return;
        const collisionInterval = setInterval(() => {
            setTreats(prev => {
                const playerY = 200;
                const filteredTreats = prev.filter(treat => {
                    //collide formula :The treat is overlapping with the player’s box in both X and Y directions.
                    const collide =
                        treat.x < playerX + playerWidth &&
                        treat.x + treatSize > playerX &&
                        treat.y < playerY + playerHeight &&
                        treat.y + treatSize > playerY;

                    if (collide) {
                        playcatch();
                        setScore(s => s + 1);
                        return false; // remove caught treat
                    }
                    return true;
                });
                return filteredTreats;
            });
        }, 50);
        return () => clearInterval(collisionInterval);
    }, [playerX, isPlaying, isGameOver]); // removed 'treats' here!

    // Game Over check
    useEffect(() => {
        if (lives <= 0 && isPlaying) {
            setIsGameOver(true);
            setIsPlaying(false);
            setTreats([]);
        }
    }, [lives, isPlaying]);

    // Player controls
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isPlaying || isGameOver) return;
            if (e.key === "ArrowLeft" || e.key === "A" || e.key === "a") setPlayerX(x => Math.max(0, x - 20));
            if (e.key === "ArrowRight" || e.key === "D" || e.key === "d") setPlayerX(x => Math.min(600 - playerWidth, x + 20));
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isPlaying, isGameOver]);

    const startGame = () => {
        setScore(0);
        setLives(3);
        setPlayerX(250);
        setTreats([]);
        setIsGameOver(false);
        setIsPlaying(true);
    };

    return (
        <section className='game2-section'>
            <div className='game2-container'>
                <h2 className='game2-title'>CATCH THE TREATS</h2>
                <div className='game2-main-container'>
                    <div className='game2-header'>
                        <div className='game2-score-container'>
                            <h3 className='game2-score-title'>SCORE:</h3>
                            <div className='game2-score'>{score}</div>
                        </div>
                         {/* If you have full lives,
                         all paws are bright.When you lose a life, the extra paw(s) fade to a lighter color. */}
                        <div className='game2-lives-container'>
                            {[...Array(3)].map((_, index) => (
                                <PawLives
                                    key={index}
                                    style={{
                                        opacity: index < lives ? 1 : 0.3,
                                        transition: "opacity 0.2s ease"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='game2-box'>
                        {treats.map(treat => (
                            <img
                                key={treat.id}
                                src={treat.img}
                                className='treat'
                                style={{
                                    left: treat.x,
                                    top: treat.y,
                                    position: "absolute",
                                    width: `${treatSize}px`,
                                    height: `${treatSize}px`,
                                }}
                                alt="treat"
                            />
                        ))}

                        <div
                            className='game2-player-control'
                            style={{
                                position: "absolute",
                                bottom: "0px",
                                left: playerX,
                                width: `${playerWidth}px`,
                                height: `${playerHeight}px`
                            }}
                        >
                            <img src={game2} alt="player" width={playerWidth} height={playerHeight} />
                        </div>
                    </div>
                </div>
                {!isPlaying && !isGameOver && (
                    <button onClick={startGame} className='play-btn'>Play</button>
                )}
                {isGameOver && (
                    <div className='game-over'>
                        <p>Game Over!</p>
                        <button className='play-btn' onClick={startGame}>Restart</button>
                    </div>
                )}
            </div>
        </section>
    );
};