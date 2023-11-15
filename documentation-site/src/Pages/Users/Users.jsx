import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

    return (
        <div className="Main">
            <h1>Users</h1>
            <ul>                
                {users.map(e =>
                    <li key={e.id}>
                        <Link to={"/users/" + e.username}>{e.name}</Link>
                    </li>)}
            </ul>
        </div>
    );
}