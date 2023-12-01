import './GetExpensesForLastWeek.css';
import Output from '../../components/Output';

export default function GetExpensesForLastWeek() {

    let url = `https://localhost:7203/api/FinanceOrganizer/GetExpensesForLastWeek`;

    return (
        <div>
            <h1>Get Expenses For Last Week</h1>
            <Output url={url} />
        </div>
    );
}