import { FeatureSection } from "./ux/FeatureSection"
import { Testimonals } from "./ux/Testimonals";
import why from "../assets/why.png";
export const About = () => {
    return (
        <section className="about-container">
            <section className="about-section">
                <FeatureSection
                    title="WHY US"
                    text="Pippo isn’t just another productivity app — it’s your cozy digital space where progress feels gentle, fun, and alive. With Pippo by your side, habit-building becomes emotional, meaningful, and something to look forward to."
                    image={why}
                />
                <div className="testimonals-section">
                    <h1 id="testimonals-heading"> Testimonals</h1>
                    <Testimonals />
                </div>
            </section>
        </section>
    )
}