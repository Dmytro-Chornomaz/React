import './Header.css';
import { useState, useRef, useEffect } from 'react';

function Header() {

    const [visibilityUserInfo, setVisibilityUserInfo] = useState({ display: "none" }); // none
    const [visibilityLoginForm, setVisibilityLoginForm] = useState({ display: "block" }); // block
    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const inputName = useRef();
    const inputPassword = useRef();

    const name = sessionStorage.getItem("userName");
    const token = sessionStorage.getItem("accessToken");

    // Function to track the credentials in the session storage.
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

    async function logInBtnHandler() {

        if (validateInputs()) {

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
                setErrorMessage(<p className="error">Wrong name or/and password!</p>);
                inputName.current.value = "";
                inputPassword.current.value = "";
            }
            else {
                setErrorMessage(<p className="error">Oops! Something went wrong!</p>);
                inputName.current.value = "";
                inputPassword.current.value = "";
            }
        }
        else {
            setErrorMessage(<p className="error">Too short!</p>);
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

    // Create account function.
    async function createAccHandler() {
        if (name && token) {
            setErrorMessage(<p className="error">You have to log out first!</p>);
        }
        else if (!validateInputs()) {
            setErrorMessage(<p className="error">Too short!</p>);
        }
        else {
            setErrorMessage("");

            const response = await fetch(`https://localhost:7203/api/FinanceOrganizer/CreatePerson`, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    login: inputName.current.value,
                    password: inputPassword.current.value
                })
            });

            if (response.ok === true) {
                setErrorMessage(<p className="message">Success! You can log in now.</p>);
            }
            else {
                setErrorMessage(<p className="error">Oops! Something went wrong!</p>);
            }
        }
    }

    // Function for inputs validate.
    function validateInputs() {
        if (inputName.current.value.length >= 2 && inputPassword.current.value.length >= 8) {
            return true;
        }
        return false;
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
                {errorMessage}
                <div className="loginForm" style={visibilityLoginForm} >
                    <h4 className="LogInText">Log in or create account</h4>
                    <p>
                        <input type="text" placeholder="Name (min 2 chars)" ref={inputName} onFocus={() => setErrorMessage("")} />
                    </p>
                    <p>
                        <input type="password" placeholder="Password (min 8 chars)" ref={inputPassword} onFocus={() => setErrorMessage("")} />
                    </p>
                    <input type="button" value="Log in" onClick={logInBtnHandler} />
                    <input type="button" value="Create account" onClick={createAccHandler} />
                </div>
            </div>
        </div>
    );
}

export default Header;