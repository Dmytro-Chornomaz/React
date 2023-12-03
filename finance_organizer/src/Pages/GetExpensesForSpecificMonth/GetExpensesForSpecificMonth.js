import './GetExpensesForSpecificMonth.css';
import { useRef, useState } from 'react';
import Output from '../../components/Output';

export default function GetExpensesForSpecificMonth() {

    let url = "https://localhost:7203/api/FinanceOrganizer/GetExpensesForSpecificMonth";
    const [dates, setDates] = useState({});

    const datePicker = useRef();

    function datesHandler() {
        const dateArray = datePicker.current.value.split("-");

        const year = +dateArray[0];
        const month = +dateArray[1];

        console.log(year);
        console.log(month);

        setDates({ year, month });
    }

    return (
        <div className="GetExpensesForSpecificMonth">
            <h1>Get Expenses For Specific Month</h1>
            <div className="inputForm">
                <p>Choose month</p>
                <p><input type="date" ref={datePicker} required min="2022-01-01" /></p>
                <p><input type="button" value="Get expenses" onClick={datesHandler} /></p>
            </div>
            <div className="output">
                <Output url={url} dates={dates} />
            </div>
        </div>
    );
}