import Output from '../../components/Output';
import './GetExpensesForThisYear.css';
import { useEffect, useState } from 'react';

export default function GetExpensesForThisYear() {

    const [data, setData] = useState({});

    useEffect(() => {

        let giveInPercents = false;
        const userName = sessionStorage.getItem("userName");
        const accessToken = sessionStorage.getItem("accessToken");

        let url = `https://localhost:7203/api/FinanceOrganizer/GetExpensesForThisYear?name=${userName}&giveInPercents=${giveInPercents}`;

        fetch(url, {
            method: "GET",
            headers: {
                "Accept": "text/plain",
                "Authorization": "Bearer " + accessToken
            }
        })
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div>
            <h1>Get Expenses For This Year</h1>
            <Output data={data} />
        </div>
    );
}