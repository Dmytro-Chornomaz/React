export default function Output(props) {

    const data = props.data;

    return (
        <div>
            <ul>
                <li>Meal: {data.meal}</li>
                <li>Communal services: {data.communalServices}</li>
                <li>Medicine: {data.medicine}</li>
                <li>Transport: {data.transport}</li>
                <li>Purchases: {data.purchases}</li>
                <li>Leisure: {data.leisure}</li>
                <li>Summary expenses: {data.summaryExpenses}</li>
                <li>Savings: {data.savings}</li>
            </ul>
        </div>
    );
}