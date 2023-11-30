import './Welcome.css';
//import { useState, useRef } from 'react';

export default function Welcome() {

    //const [visibilityUserInfo, setVisibilityUserInfo] = useState({ display: "none" });
    //const [visibilityLoginForm, setVisibilityLoginForm] = useState({ display: "block" });
    //const [userName, setUserName] = useState("");

    //const inputName = useRef();
    //const inputPassword = useRef();

    //let wrongInputMessage = false;
    //let smthWrongMessage = false;

    //// To delete login mistakes messages when the input field receives focus.
    //function removeRedMessages() {
    //    wrongInputMessage = false;
    //    smthWrongMessage = false;
    //}

    //// Login function.
    //async function logInBtnHandler() {
    //    const response = await fetch("https://localhost:7203/api/Login/GenerateToken", {
    //        method: "POST",
    //        headers: {
    //            "Accept": "text/plain",
    //            "Content-Type": "application/json",
    //        },
    //        body: JSON.stringify({
    //            login: inputName.current.value,
    //            password: inputPassword.current.value
    //        })
    //    });

    //    if (response.ok === true) {
    //        const data = await response.json();
    //        sessionStorage.setItem("userName", data.userName);
    //        sessionStorage.setItem("accessToken", data.accessToken);
    //        inputName.current.value = "";
    //        inputPassword.current.value = "";
    //        setVisibilityLoginForm({ display: "none" });
    //        setVisibilityUserInfo({ display: "block" });
    //        setUserName(data.userName);
    //    }
    //    else if (response.status === 401) {
    //        wrongInputMessage = true;
    //        inputName.current.value = "";
    //        inputPassword.current.value = "";
    //    }
    //    else {
    //        smthWrongMessage = true;
    //        inputName.current.value = "";
    //        inputPassword.current.value = "";
    //    }
    //}

    return (
        <div>
            <h1>Welcome</h1>
            {/*<div className="userInfo" style={visibilityUserInfo} >*/}
            {/*    <p>You are signed in as {userName}</p>*/}
            {/*    <input type="button" value="Log out" />*/}
            {/*</div>*/}
            {/*{wrongInputMessage && <p className="wrongInputMessage">Wrong name or/and password!</p>}*/}
            {/*{smthWrongMessage && <p className="smthWrongMessage">Oops! Something went wrong!</p> }*/}
            {/*<div className="loginForm" style={visibilityLoginForm} >*/}
            {/*    <h3>Log in to the service</h3>*/}
            {/*    <p>*/}
            {/*        <label>Input your name</label><br />*/}
            {/*        <input type="text" ref={inputName} onFocus={removeRedMessages} />*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <label>Input your password</label><br />*/}
            {/*        <input type="password" ref={inputPassword} onFocus={removeRedMessages} />*/}
            {/*    </p>*/}
            {/*    <input type="button" value="Log in" onClick={logInBtnHandler} />*/}
            {/*</div>*/}
        </div>
    );
}