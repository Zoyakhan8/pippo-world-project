import { GameCard } from './GameCard';
import '../ui/Game.css';
import { useRef } from 'react';
export const Games = () => {
    // Create a reference to attach to a scrollable DOM element and Function that scrolls the referenced element horizontally
    const scrollRef = useRef(null);
    const scroll = (scrollOffset) => {
        scrollRef.current.scrollBy({
            left: scrollOffset,
            behavior:'smooth'
        });
    };
    return (
        <section className="game-section">
            <div className="game-container">
                <div className='game-slider-container'>
                    <div className="left-button game-nav-button" >
                        <button onClick={() => scroll(-300)}>&lt;</button>
                    </div>
                    <div className='game-card-container' ref={scrollRef}>
                        <div className='game-card'>
                        <GameCard />
                        </div>
                    </div>
                    <div className="right-button game-nav-button">
                        <button onClick={() => scroll(300)}>&gt;</button>
                    </div>
                </div>
            </div>
        </section>
    )
}