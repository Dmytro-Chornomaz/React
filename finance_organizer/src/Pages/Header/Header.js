import './Header.css';
import { useState, useRef, useEffect } from 'react';
import DeleteUserModalWindow from '../../components/DeleteUserModalWindow/DeleteUserModalWindow';

function Header() {

    const mainMessage = "Log in or create account";
    const smthWentWrongMessage = "Oops! Something went wrong!";
    const tooShortMessage = "Too short!";

    const [visibilityUserInfo, setVisibilityUserInfo] = useState({ display: "none" }); // none
    const [visibilityLoginForm, setVisibilityLoginForm] = useState({ display: "block" }); // block
    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState(mainMessage);
    const [modalState, setModalState] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

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
                setErrorMessage("Wrong name or/and password!");
                inputName.current.value = "";
                inputPassword.current.value = "";
            }
            else {
                setErrorMessage(smthWentWrongMessage);
                inputName.current.value = "";
                inputPassword.current.value = "";
            }
        }
        else {
            setErrorMessage(tooShortMessage);
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
            setErrorMessage("You have to log out first!");
        }
        else if (!validateInputs()) {
            setErrorMessage(tooShortMessage);
        }
        else {
            setErrorMessage(mainMessage);

            const response = await fetch(`https://localhost:7203/api/FinanceOrganizer/CreatePerson`, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    login: inputName.current.value,
                    password: inputPassword.current.value
                })
            });

            if (response.ok === true) {
                setErrorMessage("Success! You can log in now.");
            }
            else {
                setErrorMessage(smthWentWrongMessage);
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

    async function deleteUserAccount(userPassord) {
        console.log(userPassord);
        
        if (name && token) {
            if (userPassord.length >= 8 && userPassord.length <= 20) {

                const response = await fetch("https://localhost:7203/api/FinanceOrganizer/DeletePerson", {
                    method: "DELETE",
                    headers: {
                        "Accept": "*/*",
                        "Authorization": "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        login: name,
                        password: userPassord
                    })
                });

                if (response.status === 204) {
                    setModalState(false);
                    logOutBtnHandler();
                    setErrorMessage("User is deleted");
                }
                else {
                    setModalMessage(smthWentWrongMessage);
                }
            }
            else {
                setModalMessage("Incorrect password!");
            }
        }
        else {
            setModalMessage("You have to log in first!");
        }
    }

    useEffect(() => {
        setModalMessage("");
    }, [modalState]);

    return (
        <div className="Header">
            <h3 className="Name">Finance Organizer</h3>
            <div className="Login">
                <div className="userInfo" style={visibilityUserInfo} >
                    <p className="userInfoText">You are logged in as {userName}</p>
                    <input type="button" value="Log out" onClick={logOutBtnHandler} />
                    <input type="button" value="Delete account" onClick={() => setModalState(true)} />
                </div>
                <div className="loginForm" style={visibilityLoginForm} >
                    <h4 className="LogInText">{errorMessage}</h4>
                    <p>
                        <input type="text" placeholder="Name (min 2 chars)" ref={inputName}
                            onFocus={() => setErrorMessage(mainMessage)} />
                    </p>
                    <p>
                        <input type="password" placeholder="Password (min 8 chars)" ref={inputPassword} onFocus={() => setErrorMessage(mainMessage)} />
                    </p>
                    <input type="button" value="Log in" onClick={logInBtnHandler} />
                    <input type="button" value="Create account" onClick={createAccHandler} />
                </div>
            </div>
            <DeleteUserModalWindow call={modalState} message={modalMessage} 
                onDestroy={() => setModalState(false)}
                deleteAccount={(userPassord) => deleteUserAccount(userPassord)} />
        </div>
    );
}

export default Header;