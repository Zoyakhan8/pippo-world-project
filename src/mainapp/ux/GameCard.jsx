import COVER1 from "../../assets/COVER1.png";
import COVER2 from "../../assets/COVER2.png";
import COVER3 from "../../assets/COVER3.png";
import '../ui/GameCard.css';
import { NavLink } from "react-router-dom";
export const GameCard=()=>{
    return(
        <section className="game-card-section">
            <div className="game-card">
                <NavLink to="/pippo/games/tic-tac-toe" className="games">
                <img src={COVER1} alt="TIC-TAC-TOE" className="img-game-cover" />
                </NavLink>
                <NavLink to="/pippo/games/catch-the-treats" className="games">
                <img src={COVER2} alt="CATCH-THE-TREATS" className="img-game-cover"  />
                </NavLink>
                <NavLink to="/pippo/games" className="games">
                <img src={COVER3} alt="COMING-SOON" className="img-game-cover games"  />
                </NavLink>
            </div>
        </section>
    )
}