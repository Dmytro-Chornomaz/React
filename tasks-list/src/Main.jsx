import { useState, useEffect } from 'react';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';

function Main() {

    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (!storedTasks) {
            return [];
        }
        else {
            return JSON.parse(storedTasks);
        }
    });
    const [tasksTitle, setTasksTitle] = useState("");

    function addTask(event) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (event.key === "Enter" && event.target.value !== "") {
            setTasks([...storedTasks, { id: uuidv4(), title: tasksTitle, status: false }]);
            setTasksTitle("");
        }
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <div className="container">
            <h2>Write your tasks</h2>
            <span>{day + " " + month + " " + year}</span>
            <div className="input-field">
                <input type="text" value={tasksTitle} onChange={event => setTasksTitle(event.target.value)} onKeyDown={addTask} />
                <label>Task name</label>
            </div>
            <List tasks={tasks} />
        </div>
    );
}

export default Main;