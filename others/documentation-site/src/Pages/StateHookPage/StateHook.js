import './Main.css';


function StateHook(){
    return(
        <div className="Main">
            <h2>Built-in React Hooks</h2>
            <p>State Hooks 
            State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

            To add state to a component, use one of these Hooks:

            useState declares a state variable that you can update directly.
            useReducer declares a state variable with the update logic inside a reducer function.
            </p>
            <p>Performance Hooks 
            A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.

            To skip calculations and unnecessary re-rendering, use one of these Hooks:

            useMemo lets you cache the result of an expensive calculation.
            useCallback lets you cache a function definition before passing it down to an optimized component.
            </p>
        </div>
    );
}

export default StateHook;