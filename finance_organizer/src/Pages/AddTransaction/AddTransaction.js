import './AddTransaction.css';
import { useRef } from 'react';

export default function AddTransaction() {

    const meal = useRef();
    const communalServices = useRef();
    const medicine = useRef();
    const transport = useRef();
    const purchases = useRef();
    const leisure = useRef();
    const summaryExpenses = useRef();
    const savings = useRef();

    function addBtnHandler() {

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

    }

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

    function roundToTwoDecimalPlaces(number) {
        return Math.round(number * 100) / 100;
    }

    function colorReset(e) {
        e.target.style.color = "";
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
        </div>
    );
}