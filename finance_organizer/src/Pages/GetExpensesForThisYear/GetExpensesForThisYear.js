import Output from '../../components/Output';
import './GetExpensesForThisYear.css';

export default function GetExpensesForThisYear() {
    
    let url = `https://localhost:7203/api/FinanceOrganizer/GetExpensesForThisYear`;

    return (
        <div>
            <h1>Get Expenses For This Year</h1>
            <Output url={url} />
        </div>
    );
}