import { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ nOfStars = 5 }) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	function handleClick(getCurrentIndex) {
		setRating(getCurrentIndex + 1);
	}

	function handleMouseMove(getCurrentIndex) {
		setHover(getCurrentIndex + 1);
	}

	function handleMouseLeave() {
		setHover(rating);
	}

	return (
		<div className="starRating">
			{[...Array(nOfStars)].map((_, index) => {
				return (
					<FaStar
						key={index}
						className={index + 1 <= (hover || rating) ? "active" : "inactive"}
						onClick={() => handleClick(index)}
						onMouseMove={() => handleMouseMove(index)}
						onMouseLeave={() => handleMouseLeave()}
						size={40}
					/>
				);
			})}
		</div>
	);
};
