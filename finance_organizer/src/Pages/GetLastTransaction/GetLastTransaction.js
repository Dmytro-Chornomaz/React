import './GetLastTransaction.css';
import Output from '../../components/Output';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useState } from 'react';

export default function GetLastTransaction() {

    let url = `https://localhost:7203/api/FinanceOrganizer/GetLastTransaction`;

    const [modalState, setModalState] = useState(false);
    const [message, setMessage] = useState("");
    
    async function deleteLastTransaction() {

        setModalState(false);
        setMessage("");

        const userName = sessionStorage.getItem("userName");
        const accessToken = sessionStorage.getItem("accessToken");

        if (userName && accessToken) {

            const response = await fetch(`https://localhost:7203/api/FinanceOrganizer/DeleteLastTransaction?name=${userName}`, {
                method: "DELETE",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + accessToken
                }
            });

            if (response.status === 204) {
                setMessage(<p className="success">The last transaction was successfully deleted!</p>);
            }
            else {
                setMessage(<p className="error">Oops! Something went wrong!</p>);
            }
        }
        else {
            setMessage(<p className="error">You must log in or create account!</p>);
        }        
    }
    
    return (
        <div>
            <h1>Get Last Transaction</h1>
            <Output url={url} />
            <ModalWindow call={modalState} onDestroy={() => setModalState(false)}
                deleteLastTrans={() => deleteLastTransaction()} />
            <button onClick={() => setModalState(true)}>Delete last transaction</button>
            {message}
        </div>
    );
}