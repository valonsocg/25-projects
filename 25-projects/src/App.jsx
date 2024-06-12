import "./App.css";
import Accordion from "./components/accordeon";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-mode-data";
import RandomColor from "./components/random-color";
import { StarRating } from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
	return (
		<>
			{/* Accordion component */}
			{/* <Accordion /> */}

			{/* Random color component */}
			{/* <RandomColor /> */}

			{/* Star Rating Component */}
			{/* <StarRating /> */}

			{/* Image Slider Component */}
			{/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}

			{/* Load More Data Component */}
			{/* <LoadMoreData /> */}

			{/* Tree View Component/ Navigation Menu */}
			<TreeView menus={menus} />
		</>
	);
}

export default App;
