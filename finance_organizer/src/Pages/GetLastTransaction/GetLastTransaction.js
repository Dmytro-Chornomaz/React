import './GetLastTransaction.css';
import Output from '../../components/Output';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useState, useEffect } from 'react';

export default function GetLastTransaction() {

    let url = `https://localhost:7203/api/FinanceOrganizer/GetLastTransaction`;

    const [modalState, setModalState] = useState(false);
    const [consentForDelete, setConsentForDelete] = useState(false);

    useEffect(() => {
        if (consentForDelete === true) {
            console.log("It is working!");


            setConsentForDelete(false);
        }
    }, [consentForDelete]);

    return (
        <div>
            <h1>Get Last Transaction</h1>
            <Output url={url} />
            <ModalWindow call={modalState} onDestroy={() => setModalState(false)}
                deleteConsent={() => setConsentForDelete(true)} />
            <button onClick={() => setModalState(true)}>Delete last transaction</button>
        </div>
    );
}