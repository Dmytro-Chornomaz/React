import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reload, addValue } from './store/counterSlice';
import { useState } from 'react';

function App() {

    const count = useSelector((state) => state.counterValue.count);
    const dispatch = useDispatch();

    function inc() {
        dispatch(increment());
    }

    function dec() {
        dispatch(decrement());
    }

    function rel() {
        dispatch(reload());
    }

    const [value, setValue] = useState(0);

    function add() {
        const val = Number(value);
        dispatch(addValue(isNaN(val) ? 0 : val));
    }

    return (
        <div className="container">
            <div>
                <h3>{count}</h3>
                <button onClick={inc}>Increment</button>
                <button onClick={dec}>Decrement</button>
                <button onClick={rel}>Reload</button>
            </div>
            <div>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                <button onClick={add}>Plus value</button>
            </div>
        </div>
    );
}

export default App;
