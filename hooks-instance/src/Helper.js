import { useState } from 'react';

export default function Helper(props) {

    const [helperState, setHelperState] = useState("Helper");

    function changeState() {
        setHelperState("Helper with changed state");
    }

    return (
        <div className="Helper">
            <h3>*** {helperState} component ***</h3>
            <button onClick={changeState}>Change state</button>
            {console.log("Render component Helper")}
            {/* Homework 5 */ }
            <ul>{props.arr.map((e, i) => <li key={i}>{e}</li>)}</ul>
        </div>
    );
}