import { useState, useRef, useEffect } from 'react';
import Helper from './Helper';

function App() {

    // Lesson 4
    const [counter, setCounter] = useState(0);
    const [pcolor, setPcolor] = useState({ background: "white" });
    const [val, setVal] = useState(0);
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const [random, setRandom] = useState(0);
    const [fontColor, setFontColor] = useState({ color: "black" });

    function increase() {
        setCounter(counter + 1);
        setPcolor({ background: "green" });
    }

    function decrease() {
        setCounter(counter - 1);
        setPcolor({ background: "red" });

    }

    function valSetter(event) {
        setVal(event.target.value);
    }

    const push = () => {
        let randomFrom0To1000 = getRandomNumber(0, 1001);
        setArr([...arr, randomFrom0To1000]);
    }

    function randomButton() {
        let randomFrom0To100 = getRandomNumber(0, 101);
        setRandom(randomFrom0To100);
    }

    function changeFontColor() {
        let r = getRandomNumber(0, 256);
        let g = getRandomNumber(0, 256);
        let b = getRandomNumber(0, 256);

        setFontColor({ color: `rgb(${r}, ${g}, ${b})` });
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Lesson 5
    const but1 = useRef();
    const inp1 = useRef();
    const checkbox1 = useRef();
    const [appState, setAppState] = useState(1);

    function buttonListener() {
        but1.current.style.background = "orange";
        console.log(inp1.current.value);
        console.log(checkbox1.current.checked);
    }

    function changeAppState() {
        setAppState(appState * 2);
    }

    // Lesson 5 useEffect
    const [stateX, setStateX] = useState(-100);
    const [users, setUsers] = useState([]);

    function changeStateX() {
        setStateX(stateX + 10);
    }

    useEffect(() => {
        console.log("useEffect stateX");
    }, [stateX]);

    useEffect(() => {
        console.log("useEffect appState");
    }, [appState]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

    return (
        <div className="App">
            {/* Lesson 4 */}
            <h2>{counter}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <p style={pcolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus volutpat bibendum. Nam rutrum, ex a efficitur interdum, felis erat auctor tellus, eget sodales lacus nulla feugiat mauris. Quisque maximus eros in neque finibus, malesuada consequat lectus dapibus. In hac habitasse platea dictumst. Proin sagittis sem non nibh dignissim, viverra convallis ipsum mattis. Sed laoreet, neque ut pulvinar sollicitudin, mi dolor tincidunt tortor, in laoreet nunc lacus auctor purus. Nulla ut odio a nisl ullamcorper bibendum ac quis quam. Fusce porttitor dui vel mi tristique, eu vulputate elit gravida. Cras eget tellus et mi aliquam molestie a ac massa. Nunc laoreet ipsum mauris, in molestie nulla consequat vel. Ut interdum lorem faucibus, mollis purus vitae, pretium justo. In leo dui, tempus ut ullamcorper at, venenatis ut ligula. Nam tristique sem vitae tempus vestibulum. Quisque pellentesque arcu nulla, eu pulvinar nibh vulputate vitae.
            </p>
            <hr />
            <h2>{val}</h2>
            <input type="range" onChange={valSetter} value={val}></input>
            <hr />
            <h3>{arr}</h3>
            <button onClick={push}>Push</button>
            <ul>
                {arr.map((e, index) => <li key={index}>{e}</li>)}
            </ul>
            <hr />
            <h2>{random}</h2>
            <button onClick={randomButton}>Get random integer from 0 to 100</button>
            <hr />
            <p style={fontColor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus volutpat bibendum. Nam rutrum, ex a efficitur interdum, felis erat auctor tellus, eget sodales lacus nulla feugiat mauris. Quisque maximus eros in neque finibus, malesuada consequat lectus dapibus. In hac habitasse platea dictumst. Proin sagittis sem non nibh dignissim, viverra convallis ipsum mattis. Sed laoreet, neque ut pulvinar sollicitudin, mi dolor tincidunt tortor, in laoreet nunc lacus auctor purus. Nulla ut odio a nisl ullamcorper bibendum ac quis quam. Fusce porttitor dui vel mi tristique, eu vulputate elit gravida. Cras eget tellus et mi aliquam molestie a ac massa. Nunc laoreet ipsum mauris, in molestie nulla consequat vel. Ut interdum lorem faucibus, mollis purus vitae, pretium justo. In leo dui, tempus ut ullamcorper at, venenatis ut ligula. Nam tristique sem vitae tempus vestibulum. Quisque pellentesque arcu nulla, eu pulvinar nibh vulputate vitae.
            </p>
            <button onClick={changeFontColor}>Set random font color</button>
            <hr />
            {/* Lesson 5 */}
            <input ref={inp1} type='text' />
            <button ref={but1} onClick={buttonListener}>Button 1</button>
            <input ref={checkbox1} type='checkbox' />
            <hr />
            {console.log("Render component App")}
            <h3>{appState}</h3>
            <button onClick={changeAppState}>Multiply by 2</button>
            <hr />
            {/* Lesson 5 useEffect */}
            <h3>State X is {stateX}</h3>
            <button onClick={changeStateX}>Change state X</button>
            <hr />
            <ul>
                {users.map((e, index) => <li key={e.id}>{e.name}</li>)}
            </ul>
            <hr />
            <Helper />
        </div>
    );
}

export default App;
