import './AddTransaction.css';
import { useRef } from 'react';

export default function AddTransaction() {

    const meal = useRef();
    const communalServices = useRef();
    const medicine = useRef();
    const transport = useRef();
    const purchases = useRef();
    const leisure = useRef();
    const summaryExpenses = useRef();
    const savings = useRef();

    return (
        <div>
            <h1>Add Transaction</h1>
            <div className="inputForm">
                <p><input type="text" placeholder="Meal" ref={meal} /></p>
                <p><input type="text" placeholder="Communal services" ref={communalServices} /></p>
                <p><input type="text" placeholder="Medicine" ref={medicine} /></p>
                <p><input type="text" placeholder="Transport" ref={transport} /></p>
                <p><input type="text" placeholder="Purchases" ref={purchases} /></p>
                <p><input type="text" placeholder="Leisure" ref={leisure} /></p>
                <p><input type="text" placeholder="Summary expenses" ref={summaryExpenses} /></p>
                <p><input type="text" placeholder="Savings" ref={savings} /></p>
                <p><input type="button" value="Add transaction" /></p>
            </div>
        </div>
    );
}