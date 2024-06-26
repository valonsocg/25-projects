import "./App.css";
import Accordion from "./components/accordeon";
import ModalTest from "./components/custom-modal/modal-test";
import TabsTest from "./components/custom-tabs/Tabs-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-mode-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutocomplete from "./components/search-autocomplete";
import { StarRating } from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
	return (
		<div className="App">
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
			{/* <TreeView menus={menus} /> */}

			{/* QR Code Generator Component */}
			{/* <QRCodeGenerator /> */}

			{/* Light Dark Mode Component */}
			{/* <LightDarkMode /> */}

			{/* Custom Scroll indicator */}
			{/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

			{/* Custom Tabs Component */}
			{/* <TabsTest /> */}

			{/* Custom Modal Component */}
			{/* <ModalTest /> */}

			{/* Github Profile Finder Component */}
			{/* <GithubProfileFinder /> */}

			{/* Search Autocomplete with API Component */}
			{/* <SearchAutocomplete /> */}

			{/* Tic-Tac-Toe Component */}
			<TicTacToe />
		</div>
	);
}

export default App;
