import './GetExpensesForSpecificPeriod.css';
import { useRef, useState } from 'react';
import Output from '../../components/Output';

export default function GetExpensesForSpecificPeriod() {

    let url = "https://localhost:7203/api/FinanceOrganizer/GetExpensesForSpecificPeriod";
    const [dates, setDates] = useState({});

    const beginningDatePicker = useRef();
    const endDatePicker = useRef();

    function datesHandler() {
        const beginningArray = beginningDatePicker.current.value.split("-");
        const endArray = endDatePicker.current.value.split("-");

        const beginningYear = +beginningArray[0];
        const beginningMonth = +beginningArray[1];
        const beginningDay = +beginningArray[2];
        const endYear = +endArray[0];
        const endMonth = +endArray[1];
        const endDay = +endArray[2];

        setDates({ beginningYear, beginningMonth, beginningDay, endYear, endMonth, endDay });
    }

    return (
        <div className="getExpensesForSpecificPeriod">
            <h1>Get Expenses For Specific Period</h1>
            <div className="inputForm">
                <p>Beginning date</p>
                <p><input type="date" ref={beginningDatePicker} required min="2022-01-01" /></p>
                <p>End date</p>
                <p><input type="date" ref={endDatePicker} required /></p>
                <p><input type="button" value="Get expenses" onClick={datesHandler} /></p>
            </div>
            <div className="output">
                <Output url={url} dates={dates} />
            </div>            
        </div>
    );
}