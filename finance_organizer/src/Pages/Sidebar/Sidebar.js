import './Sidebar.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li><NavLink to="/AddTransaction">Add new transaction</NavLink></li>
                    <li><NavLink to="/GetLastTransaction">Get last transaction</NavLink></li>
                    <li><NavLink to="/GetExpensesForLastWeek">Get expenses for last week</NavLink></li>
                    <li><NavLink to="/GetExpensesForThisMonth">Get expenses for this month</NavLink></li>
                    <li><NavLink to="/GetExpensesForThisYear">Get expenses for this year</NavLink></li>
                    <li><NavLink to="/GetExpensesForSpecificMonth">Get expenses for specific month</NavLink></li>
                    <li><NavLink to="/GetExpensesForSpecificYear">Get expenses for specific year</NavLink></li>
                    <li><NavLink to="/GetExpensesForSpecificPeriod">Get expenses for specific period</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;