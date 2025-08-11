import landing from "../assets/landing.png";
import habit from "../assets/habit.png";
import happy from "../assets/happy.png";
import stats from "../assets/stats.png";
import games from "../assets/games.png";
import profile from "../assets/profile.png";
import "./ui/Home.css";
import { FeatureSection } from "../pages/ux/FeatureSection";
import { Testimonals } from "./ux/Testimonals";
import { NavLink } from "react-router-dom";
export const Home = () => {
    return (
        <section className="home-container">
            <section className="landing-container">
                <div className="landing-page">
                    <h1 className="landing-heading">pippo: your virtual self-care buddy</h1>
                    <p className="p-about">
                        Build consistency, stay calm and grow with your personal cat friend
                    </p>
                    <NavLink to="/pippo/home" className="cta" id="call">start now</NavLink>
                </div>
                <img className='image-landing'src={landing} alt="landing" />
            </section>
            <div className="features-section">
                <h1 id="feature-heading">Meet Pippos's World</h1>
            <div className="feature-grid">
            <FeatureSection
                title="Habit Tracking"
                text="Build your daily routine with simple, stress-free habit tracking. Whether it's studying, drinking water, or journaling, Pippo helps you stay on track with a calm interface and gentle reminders. No pressure — just gentle progress every day."
                image={habit}
            />

            <FeatureSection
                title="Emotional Cat Companion"
                text="Your pet, Pippo, is more than just cute — it reacts to your progress! When you're doing great, Pippo gets excited. If you're having a slow week, it gets sleepy or worried. It's a little emotional mirror that makes self-care feel alive and encouraging."
                image={happy}
                reverse
            />

            <FeatureSection
                title="Visual Progress Stats"
                text="Track your consistency with clear, beautiful visuals. From pie charts to simple streak indicators, you can see how far you’ve come at a glance. These insights keep you motivated without overwhelming data or pressure."
                image={stats}
            />
            <FeatureSection
                title="Mini Games"
                text="Track your consistency with clear, beautiful visuals. From pie charts to simple streak indicators, you can see how far you’ve come at a glance. These insights keep you motivated without overwhelming data or pressure."
                image={games}
                reverse
            />
            <FeatureSection
                title="Profile & Pet Customization"
                text="Track your consistency with clear, beautiful visuals. From pie charts to simple streak indicators, you can see how far you’ve come at a glance. These insights keep you motivated without overwhelming data or pressure."
                image={profile}
            />
            </div>
            <div className="testimonals-section">
                <h1 id="testimonals-heading"> Testimonals</h1>
            <Testimonals />
            </div>
            </div>
        </section>
    );
};
