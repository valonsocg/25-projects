import { useState } from "react";
import "./modal.css";
import Modal from "./modal";

export default function ModalTest() {
	const [showModal, setShowModal] = useState(false);

	function handleClickModal() {
		setShowModal(!showModal);
	}

	function onClose() {
		setShowModal(false);
	}

	return (
		<div className="modal-test">
			<button type="button" onClick={handleClickModal}>
				Open Modal PopUp
			</button>
			{showModal === true ? (
				<Modal
					onClose={onClose}
					header="Hola mundo!"
					body="hello world"
					footer="custom footer"
				/>
			) : null}
		</div>
	);
}
