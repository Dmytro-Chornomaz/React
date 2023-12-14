import { useEffect, useState } from 'react';
import './Output.css';

export default function Output(props) {

    const [data, setData] = useState({});
    const [problemText, setProblemText] = useState("");
    const [checked, setChecked] = useState(false);
    const [checkboxVisibility, setCheckboxVisibility] = useState(true);

    // Hook to output different types of user expenses.
    useEffect(() => {

        const userName = sessionStorage.getItem("userName");
        const accessToken = sessionStorage.getItem("accessToken");

        if (userName && accessToken) {

            let urlWithParams = "";

            switch (props.url) {
                case "https://localhost:7203/api/FinanceOrganizer/GetLastTransaction":
                    setCheckboxVisibility(false);
                    urlWithParams = props.url + `?name=${userName}&giveInPercents=${checked}`;
                    break;
                case "https://localhost:7203/api/FinanceOrganizer/GetExpensesForSpecificPeriod":
                    setProblemText("");
                    urlWithParams = props.url + `?name=${userName}&dayStart=${props.dates.beginningDay}&monthStart=${props.dates.beginningMonth}&yearStart=${props.dates.beginningYear}&dayEnd=${props.dates.endDay}&monthEnd=${props.dates.endMonth}&yearEnd=${props.dates.endYear}&giveInPercents=${checked}`;
                    break;
                case "https://localhost:7203/api/FinanceOrganizer/GetExpensesForSpecificMonth":
                    setProblemText("");
                    urlWithParams = props.url + `?name=${userName}&month=${props.dates.month}&year=${props.dates.year}&giveInPercents=${checked}`;
                    break;
                case "https://localhost:7203/api/FinanceOrganizer/GetExpensesForSpecificYear":
                    setProblemText("");
                    urlWithParams = props.url + `?name=${userName}&year=${props.dates.specificYear}&giveInPercents=${checked}`;
                    break;
                default:
                    urlWithParams = props.url + `?name=${userName}&giveInPercents=${checked}`;
                    break;
            }

            // Function to get the response and handle it.
            const responseData = async () => {
                const response = await fetch(urlWithParams, {
                    method: "GET",
                    headers: {
                        "Accept": "text/plain",
                        "Authorization": "Bearer " + accessToken
                    }
                });

                if (response.ok === true) {
                    const dataFromResponse = await response.json();
                    setData(dataFromResponse);
                }
                else if (response.status === 404) {
                    setData({});
                    setProblemText("You have not had any transaction yet!");
                }
                else {
                    setData({});                    
                    setProblemText("Oops! Something went wrong! Didn't you input the date?");
                }
            }

            responseData();
        }
        else {
            setData({});
            setProblemText("You have to log in or create an account!");
        }

    }, [props.url, checked, props.dates]);

    // Function to change checkbox state.
    function checkboxHandler() {
        setChecked(!checked);
    }

    return (
        <div>
            <ul>
                <li>Meal: {data.meal} {checked && "%"}</li>
                <li>Communal services: {data.communalServices} {checked && "%"}</li>
                <li>Medicine: {data.medicine} {checked && "%"}</li>
                <li>Transport: {data.transport} {checked && "%"}</li>
                <li>Purchases: {data.purchases} {checked && "%"}</li>
                <li>Leisure: {data.leisure} {checked && "%"}</li>
                <li>Others: {data.others} {checked && "%"}</li>
                <li>Summary expenses: {data.summaryExpenses} {checked && "%"}</li>
                <li>Savings: {data.savings} {checked && "%"}</li>
            </ul>
            {checkboxVisibility && <p><input checked={checked} onChange={checkboxHandler} type='checkbox' />Get expenses in percent</p>}                        
            <p className="problems">{problemText}</p>
        </div>
    );
}