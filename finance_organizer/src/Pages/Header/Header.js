import './Header.css';
import { useState, useRef, useEffect } from 'react';

function Header() {

    const [visibilityUserInfo, setVisibilityUserInfo] = useState({ display: "none" }); // none
    const [visibilityLoginForm, setVisibilityLoginForm] = useState({ display: "block" }); // block
    const [userName, setUserName] = useState("");

    const inputName = useRef();
    const inputPassword = useRef();

    let wrongInputMessage = false;
    let smthWrongMessage = false;

    const name = sessionStorage.getItem("userName");
    const token = sessionStorage.getItem("accessToken");

    useEffect(() => {
        if (name && token) {
            setVisibilityUserInfo({ display: "block" });
            setVisibilityLoginForm({ display: "none" });
            setUserName(name);
        }
        else {
            setVisibilityUserInfo({ display: "none" });
            setVisibilityLoginForm({ display: "block" });
            setUserName("");
        }
    }, [name, token]);

    // To delete login mistakes messages when the input field receives focus.
    function removeRedMessages() {
        wrongInputMessage = false;
        smthWrongMessage = false;
    }

    // Log in function.
    async function logInBtnHandler() {
        const response = await fetch("https://localhost:7203/api/Login/GenerateToken", {
            method: "POST",
            headers: {
                "Accept": "text/plain",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                login: inputName.current.value,
                password: inputPassword.current.value
            })
        });

        if (response.ok === true) {
            const data = await response.json();
            sessionStorage.setItem("userName", data.userName);
            sessionStorage.setItem("accessToken", data.accessToken);
            inputName.current.value = "";
            inputPassword.current.value = "";
            setVisibilityLoginForm({ display: "none" });
            setVisibilityUserInfo({ display: "block" });
            setUserName(data.userName);
        }
        else if (response.status === 401) {
            wrongInputMessage = true;
            inputName.current.value = "";
            inputPassword.current.value = "";
        }
        else {
            smthWrongMessage = true;
            inputName.current.value = "";
            inputPassword.current.value = "";
        }
    }

    // Log out function.
    function logOutBtnHandler() {
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem("accessToken");
        setUserName("");
        setVisibilityUserInfo({ display: "none" });
        setVisibilityLoginForm({ display: "block" });
    }

    return (
        <div className="Header">
            <h3 className="Name">Finance Organizer</h3>
            <div className="Login">
                <div className="userInfo" style={visibilityUserInfo} >
                    <p className="userInfoText">You are logged in as {userName}</p>
                    <input type="button" value="Log out" onClick={logOutBtnHandler} />
                    <input type="button" value="Delete account" />
                </div>
                {wrongInputMessage && <p className="wrongInputMessage">Wrong name or/and password!</p>}
                {smthWrongMessage && <p className="smthWrongMessage">Oops! Something went wrong!</p>}
                <div className="loginForm" style={visibilityLoginForm} >
                    <h4 className="LogInText">Log in or create account</h4>
                    <p>
                        <input type="text" placeholder="Input your name" ref={inputName} onFocus={removeRedMessages} />
                    </p>
                    <p>
                        <input type="password" placeholder="Input your password" ref={inputPassword} onFocus={removeRedMessages} />
                    </p>
                    <input type="button" value="Log in" onClick={logInBtnHandler} />
                    <input type="button" value="Create account" />
                </div>
            </div>
        </div>
    );
}

export default Header;