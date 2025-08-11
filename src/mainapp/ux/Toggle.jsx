import '../ui/Toggle.css';
import { useState, useEffect } from "react";

export const Toggle = () => {
    const [isOn, setIsOn] = useState(() => {
        // Restore theme from localStorage so it stays on navigation
        return localStorage.getItem("theme") === "dark";
    });

    const handleToggle = () => setIsOn(prev => !prev);

    useEffect(() => {
        if (isOn) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }, [isOn]);

    return (
        <section className="toggle-section">
            <div 
                className={`toggle-container ${isOn ? 'on' : ''}`}
                onClick={handleToggle}
            >
                <div className="circle" />
            </div>
        </section>
    );
};
