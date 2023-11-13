import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <Link to="/">
                <h1>React documentation page</h1>
                <h3>Learn React</h3>
            </Link>
        </div>
    );
}

export default Header;