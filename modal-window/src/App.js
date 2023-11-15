import ModalWindow from './components/Modal/ModalWindow';
import { useState } from 'react';

function App() {

    const [modalState, setModalState] = useState(false);

    return (
        <div className="App">
            <ModalWindow call={modalState} onDestroy={() => setModalState(false)} />
            <button onClick={() => setModalState(true)}>Modal window</button>
        </div>
    );
}

export default App;
