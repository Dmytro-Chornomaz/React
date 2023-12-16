import { Link, useLoaderData } from 'react-router-dom';

export default function UserPage() {

    const user = useLoaderData();

    return (
        <div className="Main user-page">
            <div>
                <Link to="/users">Back</Link>
            </div>            
            <h3>User: {user.name}</h3>
            <h4>Phone: {user.phone}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Company: {user.company.name}</h4>
        </div>
    );
}