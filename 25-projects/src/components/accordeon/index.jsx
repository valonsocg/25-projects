import { useState } from "react";
import "./styles.css";
import data from "./data";

export default function Accordion() {
	const [selected, setSelected] = useState(null);
	const [enableMultiSelection, setEnableMultiSelection] = useState(false);
	const [multiple, setMultiple] = useState([]);

	function handleSingleSelection(getCurrentId) {
		setSelected(getCurrentId === selected ? null : getCurrentId);
	}

	function handleMultiSelection(getCurrentId) {
		const copyMultiple = [...multiple];
		const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
		if (findIndexOfCurrentId === -1) {
			copyMultiple.push(getCurrentId);
		} else {
			copyMultiple.splice(findIndexOfCurrentId, 1);
		}
		setMultiple(copyMultiple);
	}

	function toogleMultiSelection() {
		setEnableMultiSelection(!enableMultiSelection);
		setSelected(null);
		setMultiple([]);
	}

	return (
		<div className="wrapper">
			<button type="button" onClick={toogleMultiSelection}>
				Enable Multi Selection
			</button>
			<div className="accordion">
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div key={dataItem.id} className="item">
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<div
								onClick={
									enableMultiSelection
										? () => handleMultiSelection(dataItem.id)
										: () => handleSingleSelection(dataItem.id)
								}
								className="title"
							>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
							{enableMultiSelection
								? multiple.indexOf(dataItem.id) !== -1 && (
										<div className="content">{dataItem.answer}</div>
									)
								: selected === dataItem.id && (
										<div className="content">{dataItem.answer}</div>
									)}
						</div>
					))
				) : (
					<div>No data found!</div>
				)}
			</div>
		</div>
	);
}
