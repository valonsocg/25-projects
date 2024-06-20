export default function Modal({ id, header, body, footer, onClose }) {
	return (
		<div id={id || "Modal"} className="modal">
			<div className="modal-container">
				<div className="header">
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<span onClick={onClose} className="close-modal-icon">
						&times;
					</span>
					{header ? <h1>{header}</h1> : "Header"}
				</div>
				<div className="body">{body ? <p>{body}</p> : "Body"}</div>
				<div className="footer">{footer ? <h2>{footer}</h2> : "Footer"}</div>
			</div>
		</div>
	);
}
