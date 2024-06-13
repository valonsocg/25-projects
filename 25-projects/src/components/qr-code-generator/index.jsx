import { useState } from "react";
import "./styles.css";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
	const [qrCode, setQrCode] = useState("");
	const [input, setInput] = useState("");

	function handleGenerateQRCode() {
		setQrCode(input);
		setInput("");
	}

	return (
		<div className="qr-container">
			<h1>QR Code Generator</h1>
			<div className="qr-input-button">
				<input
					type="text"
					name="qr-code"
					placeholder="Enter your value here"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					disabled={input && input.trim() !== "" ? false : true}
					type="button"
					onClick={handleGenerateQRCode}
				>
					Generate Qr Code
				</button>
			</div>
			<div>
				<QRCode id="qr-code" value={qrCode} />
			</div>
			{qrCode && (
				<p style={{ fontWeight: "bold" }}>Generated QR Code for: "{qrCode}"</p>
			)}
		</div>
	);
}
