import './Welcome.css';
import { useState, useRef } from 'react';

export default function Welcome() {

    let tokenKey = "accessToken";

    const [visibility, setVisibility] = useState({ display: "none" });
    const [userName, setUserName] = useState("");

    const inputName = useRef();
    const inputPassword = useRef();

    async function logInBtnHandler() {
        const response = await fetch("https://localhost:7203/api/Login/GenerateToken", {
            method: "POST",
                headers: { 
				"Accept": "text/plain", 
				"Content-Type": "application/json",
//"Access-Control-Allow-Origin": "https://localhost:7203"
				},
                body: JSON.stringify({
                    login: inputName.current.value,
                    password: inputPassword.current.value
                })
        });

        if (response.ok === true) {
            const data = await response.json();
            console.log(data);
        }
    }

    return (
        <div>
            <h1>Welcome</h1>
            <div className="userInfo" style={visibility} >
                <p>You are signed in as {userName}</p>
                <input type="button" value="Log out" id="logOut" />
            </div>
            <div className="loginForm">
                <h3>Log in to the service</h3>
                <p>
                    <label>Input your name</label><br />
                    <input type="text" ref={inputName} />
                </p>
                <p>
                    <label>Input your password</label><br />
                    <input type="password" ref={inputPassword} />
                </p>
                <input type="button" value="Log in" onClick={logInBtnHandler} />
            </div>
        </div>
    );
}