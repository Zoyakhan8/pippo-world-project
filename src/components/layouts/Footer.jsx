import './Footer.css'
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
export const Footer = () => {
    return (
        <div className=" footer-container">
            <div className="about">
                <h1>PIPPO </h1>
                <p> Make your complicated life more simple with pippo !!</p>
            </div>
            <div className="links">
                <div className="footer-links">
                    <p className='heading'>Social</p>
                    <p><a href="https://www.instagram.com/"><img src={insta} alt="ig-icon" className="z" /></a></p>
                    <p><a href="https://www.facebook.com/"><img src={facebook} alt="fb-icon" className="z" /></a></p>
                    <p><a href="https://www.youtube.com/"><img src={youtube} alt="yt-icon" className="z" /></a></p>
                </div>
                <div className="footer-links">
                    <p className="heading">Support</p>
                    <ul>
                        <li>Help</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <p className="heading">Legal</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Services</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}