import './AddTransaction.css';
import { useRef, useState } from 'react';

export default function AddTransaction() {

    const meal = useRef();
    const communalServices = useRef();
    const medicine = useRef();
    const transport = useRef();
    const purchases = useRef();
    const leisure = useRef();
    const summaryExpenses = useRef();
    const savings = useRef();

    const [message, setMessage] = useState("");

    // Function to add new transaction and handle the result of it.
    async function addBtnHandler() {

        setMessage("");

        const userName = sessionStorage.getItem("userName");
        const accessToken = sessionStorage.getItem("accessToken");
        
        if (userName && accessToken) {

            let inputsArray = [
                meal,
                communalServices,
                medicine,
                transport,
                purchases,
                leisure,
                summaryExpenses,
                savings
            ];

            let answer = inputValidator(inputsArray);
            console.log(answer);

            if (answer) {

                const categoriesObj = {
                    id: 0,
                    personId: 0,
                    meal: meal.current.value,
                    communalServices: communalServices.current.value,
                    medicine: medicine.current.value,
                    transport: transport.current.value,
                    purchases: purchases.current.value,
                    leisure: leisure.current.value,
                    summaryExpenses: summaryExpenses.current.value,
                    savings: savings.current.value
                }

                const response = await fetch(`https://localhost:7203/api/FinanceOrganizer/AddTransaction?name=${userName}`, {
                    method: "POST",
                    headers: {
                        "Accept": "*/*",
                        "Authorization": "Bearer " + accessToken,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(categoriesObj)
                });

                if (response.ok === true) {
                    setMessage(<p className="ok">You successfully added a new transaction!</p>);
                }
                else {
                    setMessage(<p className="error">Oops! Something went wrong!</p>);
                    console.log(response);
                }

            }
            else {
                setMessage(<p className="error">Wrong input!</p>);
            }
        }
        else {
            setMessage(<p className="error">You must log in or create account!</p>);
        }        
    }

    // Function to validate the array of input values and highlight the incorrect values.
    function inputValidator(arr) {

        let validationFail;        
        let zeroCounter = 0;        

        for (let item of arr) {

            item.current.style.color = "";

            if (item.current.value === "" || item.current.value === "0") {
                item.current.value = 0;
                zeroCounter++;
            }

            if (!validateNumber(item.current.value)) {
                item.current.style.color = "red";
                validationFail = true;
            }
        }
        
        if (validationFail === true || zeroCounter > 7) {
            return false;
        }
        else {
            return true;
        }
    }

    // Function to validate one input value.
    function validateNumber(input) {

        let result;

        if (input.includes(",")) {
            result = false;
            return result;
        }

        const number = parseFloat(input);
                
        if (isNaN(number) === true) {
            result = false;
        }
        else if (number > 1000000000 || number < 0) {
            result = false;
        }
        else if (number - roundToTwoDecimalPlaces(number) !== 0) {
            result = false;
        }
        else {
            result = true;
        }

        return result;        
    }

    // Function to round the number to two decimal places.
    function roundToTwoDecimalPlaces(number) {
        return Math.round(number * 100) / 100;
    }

    // Function to remove the error message and red text color of input field.
    function colorReset(e) {
        e.target.style.color = "";
        setMessage("");
    }

    return (
        <div>
            <h1>Add Transaction</h1>
            <div className="inputForm">
                <p><input type="text" onFocusCapture={colorReset} placeholder="Meal" ref={meal} /></p>
                <p><input type="text" onFocusCapture={colorReset} placeholder="Communal services" ref={communalServices} /></p>
                <p><input type="text" onFocusCapture={colorReset} placeholder="Medicine" ref={medicine} /></p>
                <p><input type="text" onFocusCapture={colorReset} placeholder="Transport" ref={transport} /></p>
                <p><input type="text" onFocusCapture={colorReset} placeholder="Purchases" ref={purchases} /></p>
                <p><input type="text" onFocusCapture={colorReset} placeholder="Leisure" ref={leisure} /></p>
                <p><input type="text" onFocusCapture={colorReset} placeholder="Summary expenses" ref={summaryExpenses} /></p>
                <p><input type="text" onFocusCapture={colorReset} placeholder="Savings" ref={savings} /></p>
                <p><input type="button" value="Add transaction" onClick={addBtnHandler} /></p>
            </div>
            {message}
        </div>
    );
}