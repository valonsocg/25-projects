import { useCallback, useEffect, useState } from "react";

export default function RandomColor() {
	const [typeOfColor, setTypeOfColor] = useState("hex");
	const [color, setColor] = useState("#000000");

	const randomColorUtility = useCallback((length) => {
		return Math.floor(Math.random() * length);
	}, []);

	const generateRandomHexColor = useCallback(() => {
		const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
		let hexColor = "#";
		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtility(hex.length)];
		}
		setColor(hexColor);
	}, [randomColorUtility]);

	const generateRandomRgbColor = useCallback(() => {
		const r = randomColorUtility(256);
		const g = randomColorUtility(256);
		const b = randomColorUtility(256);
		setColor(`rgb(${r},${g},${b})`);
	}, [randomColorUtility]);

	useEffect(() => {
		if (typeOfColor === "rgb") {
			generateRandomRgbColor();
		} else {
			generateRandomHexColor();
		}
	}, [typeOfColor, generateRandomHexColor, generateRandomRgbColor]);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				background: color,
				textAlign: "center",
			}}
		>
			<button type="button" onClick={() => setTypeOfColor("hex")}>
				Create HEX Color
			</button>
			<button type="button" onClick={() => setTypeOfColor("rgb")}>
				Create RGB Color
			</button>
			<button
				type="button"
				onClick={
					typeOfColor === "hex"
						? generateRandomHexColor
						: generateRandomRgbColor
				}
			>
				Generate Random Color
			</button>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "#fff",
					fontSize: "60px",
					marginTop: "50px",
					flexDirection: "column",
					gap: "20px",
				}}
			>
				<h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	);
}
