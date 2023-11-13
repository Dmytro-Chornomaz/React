import { Link, useLoaderData } from 'react-router-dom';

export default function UserPage() {

    const user = useLoaderData();

    return (
        <div className="Main user-page">
            <div>
                <Link to="/users">Back</Link>
            </div>
            <img src={user.img} alt="avatar" />
            <h2>User: {user.name}</h2>
            <h3>Age: {user.age}</h3>
            <h3>{user.email}</h3>
        </div>
    );
}