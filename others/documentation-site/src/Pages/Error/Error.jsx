import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {

    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page" className="Main" >
            <h1>Error</h1>
            <p>The page does not exist!</p>
        </div>
    );
}