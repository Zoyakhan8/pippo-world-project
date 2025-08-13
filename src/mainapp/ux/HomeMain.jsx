import '../ui/HomeMain.css';
import carpet from "../../assets/carpet.png";
import lamp from "../../assets/lamp.png";
import deco from "../../assets/deco1.png";
import plant from "../../assets/plant.png";
import cupboard from "../../assets/cupboard.png";
import sofa from "../../assets/sofa.png";
// cat
import catExcited from "../../assets/happy-cat.png";
import catHappy from "../../assets/game2.png";
import catWorried from "../../assets/worried.png";
// main
export const HomeMain = ({ catMood }) => {
    const getCatImage = () => {
        switch (catMood) {
            case "excited": return catExcited;
            case "happy": return catHappy;
            case "worried": return catWorried;
            default: return catHappy;
        }
    };
    return (
        <section className="homeMain-section">
            <div className="homeMain-container">
                <div className="room">
                    <div className="wall">
                        <div className="window"></div>
                        <div className='lamp'>
                            <img src={lamp} alt="LAMP" />
                        </div>
                        <div className='deco'>
                            <img src={deco} alt="HANGING DECO" />
                        </div>
                    </div>
                    <div className="floor-container">
                        <div className='sofa'>
                            <img src={sofa} alt="SOFA" />
                        </div>
                        <div className='cupboard'>
                            <img src={cupboard} alt="CUPBOARD" />
                        </div>
                        <div className='carpet'>
                            <img src={carpet} alt="CARPET" />
                        </div>
                        <div className='plant'>
                            <img src={plant} alt="PLANT" />
                        </div>
                        <div className='cat-container'>
                            <img src={getCatImage()} alt="Cat"  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};