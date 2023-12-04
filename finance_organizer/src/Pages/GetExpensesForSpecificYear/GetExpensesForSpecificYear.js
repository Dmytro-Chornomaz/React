import './GetExpensesForSpecificYear.css';
import { useRef, useState } from 'react';
import Output from '../../components/Output';

export default function GetExpensesForSpecificYear() {

    let url = "https://localhost:7203/api/FinanceOrganizer/GetExpensesForSpecificYear";
    const [dates, setDates] = useState({});
    const input = useRef();

    function datesHandler() {
        const specificYear = +input.current.value;
        setDates({ specificYear });
    }

    return (
        <div className="GetExpensesForSpecificYear">
            <h1>Get Expenses For Specific Year</h1>
            <div className="inputForm">
                <p>Input year</p>
                <p><input type="text" ref={input} required placeholder="XXXX" /></p>
                <p><input type="button" value="Get expenses" onClick={datesHandler} /></p>
            </div>
            <div className="output">
                <Output url={url} dates={dates} />
            </div>
        </div>
    );
}