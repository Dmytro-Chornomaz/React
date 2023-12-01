import './GetLastTransaction.css';
import Output from '../../components/Output';

export default function GetLastTransaction() {

    let url = `https://localhost:7203/api/FinanceOrganizer/GetLastTransaction`;

    return (
        <div>
            <h1>Get Last Transaction</h1>
            <Output url={url} />
        </div>
    );
}