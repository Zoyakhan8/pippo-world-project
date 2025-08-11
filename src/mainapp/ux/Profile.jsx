import '../ui/Profile.css';
import pet from '../../assets/pet.png';
import test1 from '../../assets/test1.jpg'
import flameIcon from "../../assets/FlameIcon.png";
import { Notebook } from './Notebook';
import { useState, useEffect } from 'react';
import { getStreak } from '../../utils/Streaks';
export const Profile = ({ petName, setPetName }) => {
    const [isEditingUser, setIsEditingUser] = useState(true);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    // stops the form from reloading the page
    const handleUserSubmit = (e) => {
        e.preventDefault();
        setIsEditingUser(false);
    };

    const handleEditClick = () => {
        setIsEditingUser(true);
    };
    // pet
    const [isEditingPet, setIsEditingPet] = useState(true);
    const handlePetSubmit = (e) => {
        e.preventDefault();
        setIsEditingPet(false);
    };

    const handlePetEditClick = () => {
        setIsEditingPet(true);
    };

    //  getStreak() is called to retrieve the current streak from helper.
    // That value is stored in streakCount state.
    // The component re-renders to show the streak.
    const [streakCount, setStreakCount] = useState(0);
    useEffect(() => {
        const streak = getStreak();
        setStreakCount(streak);
    }, []);

    return (
        <section className="profile-section">
            <div className="pet-profile-container">
                <Notebook>
                    <div className="profile-content-box">
                        <div className='pet-img-container'>
                            <div className='pet-img'>
                                <img src={pet} alt="Profile" />
                            </div>
                        </div>
                        <div className="pet-profile-content">
                            {isEditingPet ? (
                                <form className="pet-profile-input" onSubmit={handlePetSubmit}>
                                    <input
                                        value={petName}
                                        onChange={(e) => setPetName(e.target.value)}
                                        type="text"
                                        placeholder="Enter your name"
                                        className="inputs"
                                    />
                                    <button type="submit" className="pet-buttons submit-button">Submit</button>
                                </form>
                            ) : (
                                <div className="pet-profile-card">
                                    <h3>{petName || "No Name"}</h3>
                                    <button onClick={handlePetEditClick} className="pet-buttons">Edit</button>
                                </div>
                            )}
                        </div>
                    </div>
                </Notebook>
            </div>
            <div className='streaks-container'>
                <div className="streaksCard-container">
                    <div className="tapes">
                        <span className="tape"></span>
                    </div>
                    <div className="streak-card">
                        <div className="streak-header">
                            <img src={flameIcon} alt="Streak" className="streak-icon" />
                            <h3>{streakCount} Day Streak</h3>
                        </div>
                        <div className="streak-progress">
                            <div
                                className="streak-progress-fill"
                                style={{ width: `${Math.min(streakCount * 10, 100)}%` }}
                            ></div>
                        </div>
                        <p className="streak-text">
                            {streakCount >= 7
                                ? " You're on fire!"
                                : "Keep going to build your streak!"}
                        </p>
                    </div>
                </div>
            </div>
            <div className="user-profile-container">
                <Notebook>
                    <div className="profile-content-box">
                        <div className='img-container'>
                            <img src={test1} alt="Profile" className="pic" />
                        </div>
                        <div className="profile-content">
                            {isEditingUser ? (
                                <form className="profile-input" onSubmit={handleUserSubmit}>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="Enter your name"
                                        className="inputs"
                                    />
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="inputs"
                                    >
                                        <option value="" disabled>Select your gender</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </select>
                                    <input
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        type="number"
                                        placeholder="Enter your age"
                                        className="inputs"
                                    />
                                    <button type="submit" className="buttons submit-button">Submit</button>
                                </form>
                            ) : (
                                <div className="profile-card">
                                    <h3>{name || "No Name"}</h3>
                                    <h3>Gender: {gender || "Not set"}</h3>
                                    <h3>Age: {age || "Not set"}</h3>
                                    <button onClick={handleEditClick} className="buttons">Edit</button>
                                </div>
                            )}
                        </div>
                    </div>
                </Notebook>
            </div>
        </section>
    );
};