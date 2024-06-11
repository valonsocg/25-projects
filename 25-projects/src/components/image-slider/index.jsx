import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	async function fetchImages(getUrl) {
		try {
			setIsLoading(true);
			const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setIsLoading(false);
			}
		} catch (error) {
			setError(error.message);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (url !== "") {
			fetchImages(url);
		}
	}, [url]);

	function handlePrevImg() {
		setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
	}

	function handleNextImg() {
		setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
	}

	if (isLoading) {
		return <div>Please wait! Data is loading...</div>;
	}

	if (error !== null) {
		return <div>Error occured! {error}</div>;
	}

	return (
		<div className="container">
			<BsArrowLeftCircleFill
				className="arrow arrow-left"
				onClick={handlePrevImg}
			/>
			{images && images.length - 1
				? images.map((imageItems, index) => (
						<img
							key={imageItems.id}
							src={imageItems.download_url}
							alt={imageItems.download_url}
							className={
								currentSlide === index
									? "current-image"
									: "current-image hideImage"
							}
						/>
					))
				: null}
			<BsArrowRightCircleFill
				className="arrow arrow-right"
				onClick={handleNextImg}
			/>
			<span className="circle-indicators">
				{images && images.length - 1
					? images.map((_, index) => (
							<button
								type="button"
								key={index}
								className={
									currentSlide === index
										? "current-indicator"
										: "current-indicator update-indicator"
								}
								onClick={() => setCurrentSlide(index)}
							/>
						))
					: null}
			</span>
		</div>
	);
}
