import './GetExpensesForThisMonth.css';
import Output from '../../components/Output';

export default function GetExpensesForThisMonth() {

    let url = `https://localhost:7203/api/FinanceOrganizer/GetExpensesForThisMonth`;

    return (
        <div>
            <h1>Get Expenses For This Month</h1>
            <Output url={url} />
        </div>
    );
}