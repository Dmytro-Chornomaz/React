import './ModalWindow.css';

export default function ModalWindow({ call, onDestroy }) {

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
				<h2>Do something?</h2>
				<div className="buttons">
					<button className="accept">Yes</button>
					<button className="reject" onClick={onDestroy}>No</button>
				</div>
			</div>
		</div>
	);
}