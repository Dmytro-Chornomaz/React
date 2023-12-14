import './DeleteUserModalWindow.css';
import { useRef } from 'react';

export default function DeleteUserModalWindow({ call, message, onDestroy, deleteAccount }) {

	const input = useRef();
	const redText = { color: "red" };

	if (!call) {
		return null;
	}

	const closeModalWindow = (event) => {
		if (event.target.className === "modal") {
			onDestroy();
		}
	}

	return (
		<div className="modal" onClick={closeModalWindow}>
			<div className="modal-content">
				<b className="close" onClick={onDestroy}>X</b>
				<h2>Delete this account?</h2>					
				<div className="buttons">
					<input className="input" type="password" placeholder="Input your password" ref={input} maxLength="20"/>
					<button className="accept" onClick={() => deleteAccount(input.current.value)}>Yes</button>
					<button className="reject" onClick={onDestroy}>No</button>
					<p className="message" style={redText}>{message}</p>
				</div>				
			</div>
		</div>
	);
}