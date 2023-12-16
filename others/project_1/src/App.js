import './App.css';
import Parent from './components/Parent';

function App() {

    /* Lesson 2 */
    let myText = "Lorem ipsum dolor amet igni";
    let fruits = [
        { name: "pear", price: 12, hasPhoto: true },
        { name: "apricot", price: 25, hasPhoto: true },
        { name: "grapes", price: 18, hasPhoto: false },
        { name: "gooseberry", price: 21, hasPhoto: true },
    ];
    const myStyle = {
        color: "green",
        textTransform: "uppercase"
    }
    const myStyle2 = "styleFromCSSFile";
    let x = 0;
    const paragraph = <p>ABC 123 qwerty</p>

    function clickHandler() {
        console.log("Have a click!");
        console.log(document.forms[0].elements[0].value);
    }

    /* Lesson 3 */
    let user = {
        name: "John",
        surname: "Rambo"
    }
    let a = 1;
    let b = [1, 3, 5, 7, 9];
    let girl = "Alice";

    function fromChildToParent(arg) {
        console.log(arg);
    }

    return (
        <>
            <h2>My React</h2>
            {/* Lesson 2 */}
            <p>{myText}</p>
            <ul>
                {fruits.map((fruit, index) => <li key={index}>{fruit.name} costs {fruit.price} UAH</li>)}
            </ul>
            <hr />
            <p style={{ color: "blue", fontFamily: "Times New Roman" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex nisl. Proin luctus porttitor mi, at blandit ipsum consectetur tristique. Morbi neque metus, volutpat eget hendrerit non, elementum nec nulla. Fusce maximus, sapien eget commodo maximus, sapien urna aliquet dolor, dapibus euismod elit tortor in neque. Morbi sed facilisis turpis. Maecenas pulvinar porttitor dui non mollis. Aenean sed nisl nisi. Nunc sit amet orci in eros rhoncus facilisis sed nec dolor. Morbi at tellus eu arcu gravida suscipit nec at neque. Donec dui orci, semper sit amet sollicitudin a, efficitur sit amet ipsum. Vivamus euismod dui feugiat, vestibulum ex ac, ultrices dolor.
            </p>
            <hr />
            <p style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex nisl. Proin luctus porttitor mi, at blandit ipsum consectetur tristique. Morbi neque metus, volutpat eget hendrerit non, elementum nec nulla. Fusce maximus, sapien eget commodo maximus, sapien urna aliquet dolor, dapibus euismod elit tortor in neque. Morbi sed facilisis turpis. Maecenas pulvinar porttitor dui non mollis. Aenean sed nisl nisi. Nunc sit amet orci in eros rhoncus facilisis sed nec dolor. Morbi at tellus eu arcu gravida suscipit nec at neque. Donec dui orci, semper sit amet sollicitudin a, efficitur sit amet ipsum. Vivamus euismod dui feugiat, vestibulum ex ac, ultrices dolor.
            </p>
            <hr />
            <p className={myStyle2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex nisl. Proin luctus porttitor mi, at blandit ipsum consectetur tristique. Morbi neque metus, volutpat eget hendrerit non, elementum nec nulla. Fusce maximus, sapien eget commodo maximus, sapien urna aliquet dolor, dapibus euismod elit tortor in neque. Morbi sed facilisis turpis. Maecenas pulvinar porttitor dui non mollis. Aenean sed nisl nisi. Nunc sit amet orci in eros rhoncus facilisis sed nec dolor. Morbi at tellus eu arcu gravida suscipit nec at neque. Donec dui orci, semper sit amet sollicitudin a, efficitur sit amet ipsum. Vivamus euismod dui feugiat, vestibulum ex ac, ultrices dolor.
            </p>
            <hr />
            {x === 0 && <p>Interesting thing</p>}
            {paragraph}
            <hr />
            <form action="">
                <label htmlFor="html">*** HTML ***</label>
                <input name="myForm" />
                <input type="button" value="Submit" onClick={clickHandler} />
            </form>
            <hr />
            {/* Lesson 3 */}
            <Parent data={user} varA={a} varB={b} woman={girl} func={fromChildToParent} />
        </>
    );
}

export default App;
