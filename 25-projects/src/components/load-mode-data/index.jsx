import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
	const [count, setCount] = useState(0);
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [disableButton, setDisableButton] = useState(false);

	async function fetchProducts() {
		try {
			setIsLoading(true);
			const response = await fetch(
				`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
			);
			const data = await response.json();

			if (data && data.products && data.products.length) {
				setProducts((prevData) => [...prevData, ...data.products]);
				setIsLoading(false);
			}
		} catch (e) {
			console.log(e);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, [count]);

	useEffect(() => {
		if (products && products.length === 100) setDisableButton(true);
	}, [products]);

	if (isLoading) {
		return <div>Please wait! Loading data ...</div>;
	}

	return (
		<div className="load-more-container">
			<div className="product-container">
				{products && products.length
					? products.map((product) => (
							<div className="product" key={product.id}>
								<img src={product.thumbnail} alt={product.title} />
								<p>{product.title}</p>
							</div>
						))
					: null}
			</div>
			<div className="button-container">
				<button
					disabled={disableButton}
					type="button"
					onClick={() => setCount(count + 1)}
				>
					Load More Products
				</button>
			</div>
			{disableButton && <p>You have reached 100 products</p>}
		</div>
	);
}
