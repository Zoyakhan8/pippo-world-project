import edit from "../../assets/edit.png";
import deletes from "../../assets/delete.png";
import '../ui/HabitTracker.css'
import { updateStreak } from '../../utils/Streaks';
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
// importing chart.js 
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const HabitTracker = ({ petName, catMood, setCatMood }) => {
    // default habits to help new users
    const defaultHabits = [
        { id: 1, habit: "Drink 8 glasses of Water", completed: false },
        { id: 2, habit: "Exercise 20 minutes", completed: false },
        { id: 3, habit: "Read 10 pages of book", completed: false },
        { id: 4, habit: "Plan tomorrow's tasks", completed: false },
        { id: 5, habit: "Write 1 thing you are grateful for", completed: false },
    ];
    // adding habit data entered by user and default habits in local storage
    const [habitData, setHabitData] = useState(() => {
        const save = localStorage.getItem('habitData');
        return save ? JSON.parse(save) : defaultHabits;
    });
    // check if the user has already visited the app 
    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            localStorage.setItem('habitData', JSON.stringify(defaultHabits));
            localStorage.setItem('hasVisited', 'true');
            setHabitData(defaultHabits); // Update state too
        }
    }, []);
    // creating hooks
    const [habit, setHabit] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    // submit function which do edits and check if already existed habits or not
    const submitHabit = (e) => {
        e.preventDefault();

        const trimmedHabit = habit.trim();
        if (!trimmedHabit) return;

        const existingHabit = habitData.find(h =>
            h.habit.toLowerCase() === trimmedHabit.toLowerCase()
        );

        if (!isEditing && existingHabit) {
            const confirmEdit = window.confirm("This title already exists. Do you want to edit the existing note?");
            if (confirmEdit) {
                setIsEditing(true);
                setEditId(existingHabit.id);
                setHabit(existingHabit.habit);
            }
            return;
        }

        if (isEditing) {
            setHabitData(habitData.map(h =>
                h.id === editId
                    ? { ...h, habit: trimmedHabit }
                    : h
            ));
            setIsEditing(false);
            setEditId(null);
        } else {
            const newHabit = {
                id: Date.now(),
                habit: trimmedHabit,
            };
            setHabitData([newHabit, ...habitData]);
        }

        setHabit('');
    }
    const handleEdit = (id) => {
        const habitToEdit = habitData.find(habit => habit.id === id);
        if (habitToEdit) {
            setIsEditing(true);
            setEditId(id);
            setHabit(habitToEdit.habit);
        }
    };
    // function to delete habits 

    const handleDelete = (id) => {
        const habitExists = habitData.some(habit => habit.id === id)
        if (habitExists) {
            const confirmDelete = window.confirm("are you sure you want to delete")
            if (confirmDelete) {
                setHabitData(habitData.filter(habit => habit.id !== id))
                alert("successfully deleted!")
            }
        } else {
            alert("not found")
        }
    }
    // overline on habit text while saving in localstorage
    const toggleComplete = (id) => {
        const updatedHabits = habitData.map(habit =>
            habit.id === id ? { ...habit, completed: !habit.completed } : habit
        );
        setHabitData(updatedHabits);
        localStorage.setItem('habitData', JSON.stringify(updatedHabits)); // <-- save to localStorage
    };

    //chart
    const totalHabits = habitData.length;
    const completedCount = habitData.filter(habit => habit.completed).length;
    const completionPercent = totalHabits === 0 ? 0 : (completedCount / totalHabits) * 100;
    const [streakCount, setStreakCount] = useState(0);
    // Update streak when habits completion crosses threshold
    useEffect(() => {
        if (completionPercent >= 80 && totalHabits > 0) {
            const newStreak = updateStreak();
            setStreakCount(newStreak);
        }
    }, [completionPercent, totalHabits]);

    // Determine cat mood based on completionPercent
    useEffect(() => {
        let mood = "";
        if (completionPercent >= 80) {
            mood = "excited";
        } else if (completionPercent >= 50) {
            mood = "happy";
        } else {
            mood = "worried";
        }
        setCatMood(mood);
    }, [completionPercent, setCatMood]);
    // cat mood description 
    const getCatMessage = () => {
        const name = petName || "Cat"; 
        const moodMessages = {
            excited: `${name} is over the moon about your progress!`,
            worried: `${name} is concerned for you.`,
            happy: `${name} is purring with joy!`
        };
        return moodMessages[catMood];
    }
    // labeling charts also data implementation
    const chartData = {
        datasets: [
            {
                data: [completedCount, totalHabits - completedCount],
                backgroundColor: [" #a05a57", "#c9a6a2"],
                hoverBackgroundColor: ["#b36764ff ", "#b69693ff"],
            },
        ],
        labels: ["Completed", "Remaining"],
    };

    // structure of habit-tracker page
    return (
        <section className="habit-tracker-section">
            <div className="habit-tracker-container">
                <div className="habit-add-container">
                    <form className="habit-add" autoCapitalize="on" autoComplete="off">
                        <input type="text"
                            id="habit-enter"
                            value={habit} onChange={(e) => setHabit(e.target.value)}
                            name="habit"
                            placeholder="Enter habit" />
                        <button
                            type="submit"
                            onClick={submitHabit}
                            className="actions"
                            id="submits"> {isEditing ? "Update" : "Add"}</button>
                    </form>
                </div>
                <div className="habit-display-data">
                    <h2 className="tracker-heading">DISPLAY</h2>
                    <div className="habit-display">
                        <div className="display-grid">
                            {habitData.map((habitItem) => (
                                <div className="card" key={habitItem.id}>
                                    <div className="head">
                                        <h2 id="head-text" onClick={() => toggleComplete(habitItem.id)}
                                            className={habitItem.completed ? "completed" : ""}
                                        >
                                            {habitItem.habit}</h2>
                                    </div>
                                    <div className="display-actions">
                                        <button className="actions" onClick={() => handleEdit(habitItem.id)}>
                                            <img src={edit} alt="Edit" className="action-img" />
                                        </button>
                                        <button className="actions" onClick={() => handleDelete(habitItem.id)}>
                                            <img src={deletes} alt="Delete" className="action-img" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="habit-statistics-container">
                    <div className="habit-statistics">
                        <h3 className="tracker-heading">Habit Completion</h3>
                        <div className="donut-wrapper">
                            <Doughnut data={chartData} />
                        </div>

                    </div>
                    <div className="cat-mood-display">
                        <p>{getCatMessage()}</p>
                        <p>Your current streak: {streakCount} day{streakCount !== 1 ? "s" : ""}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}