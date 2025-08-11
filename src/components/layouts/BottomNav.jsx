import paw from "../../assets/paw.png";
import game from "../../assets/game.png";
import quotes from "../../assets/thought-bubble.png";
import habit from "../../assets/self-care.png";
import home from "../../assets/house-chimney.png";
import { NavLink } from "react-router-dom";
import './BottomNav.css';
export const BottomNav = () => {
    return (
        <section className="bottomnav-container">
            <div className="nav-button-wrap">
            <NavLink className='nav-button' id="home" to='/pippo/home'>
                <img src={home} alt="" className="nav-icon" />
            </NavLink>
            <NavLink className='nav-button' id="habit" to='/pippo/habit-tracker'>
                <img src={habit} alt=""className="nav-icon" />
            </NavLink>
            <NavLink className='nav-button' id="quotes" to='/pippo/quotes'>
                     <img src={quotes} alt="" className="nav-icon"/>
                </NavLink>
                <NavLink className='nav-button' id="game" to='/pippo/games'>
                    <img src={game} alt=""className="nav-icon" />
                </NavLink>
                <NavLink className='nav-button' id="profile" to='/pippo/profile'>
                     <img src={paw} alt=""className="nav-icon" />
                </NavLink>
              </div>
        </section>
    )
}