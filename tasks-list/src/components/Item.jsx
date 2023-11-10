import { useState } from 'react';

export default function Item({ id, title, status }) {

    const classes = ["to-do"];
    const [checked, setChecked] = useState(status);
    const [visible, setVisible] = useState(true);

    if (checked) {
        classes.push("status");
    }

    function updateStatus() {
        setChecked(!checked);
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        storedTasks.map(e => {
            if (e.id === id) {
                e.status = !checked;
            }
            return true;
        });
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    function removeElement() {
        setVisible(prev => !prev);
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        let remainingTasks = storedTasks.filter(item => {
            if (item.id !== id) {
                return true;
            }
            return false;
        });
        localStorage.setItem("tasks", JSON.stringify(remainingTasks));
    }

    return (
        <>
            {visible && (
                <li className={classes.join(" ")}>
                    <label>
                        <input type="checkbox" checked={checked} onChange={updateStatus} />
                        <span>{title}</span>
                        <i className="material-icons red-text" onClick={removeElement}>X</i>
                    </label>
                </li>
            )}
        </>
    );
}