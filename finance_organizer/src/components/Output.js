import { useEffect, useState } from 'react';
import './Output.css';

export default function Output(props) {

    const [data, setData] = useState({});
    const [problemText, setProblemText] = useState("");
    const [checked, setChecked] = useState(false);
    const [checkboxVisibility, setCheckboxVisibility] = useState(true);

    useEffect(() => {

        const userName = sessionStorage.getItem("userName");
        const accessToken = sessionStorage.getItem("accessToken");

        if (userName && accessToken) {

            if (props.url === "https://localhost:7203/api/FinanceOrganizer/GetLastTransaction") {
                setCheckboxVisibility(false);
            }

            let urlWithParams = props.url + `?name=${userName}&giveInPercents=${checked}`;
            
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
                    setProblemText("Oops! Something went wrong!");
                }
            }

            responseData();
        }
        else {
            setData({});
            setProblemText("You have to log in or create an account!");
        }

    }, [props.url, checked]);

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
                <li>Summary expenses: {data.summaryExpenses} {checked && "%"}</li>
                <li>Savings: {data.savings} {checked && "%"}</li>
            </ul>
            {checkboxVisibility && <p><input checked={checked} onChange={checkboxHandler} type='checkbox' />Get expenses in percent</p>}                        
            <p className="problems">{problemText}</p>
        </div>
    );
}