import Tabs from "./Tabs";
import "./Tabs.css";

function RandomComponent() {
	return <h1>Some Random Component</h1>;
}

function handleChange(currentTabIndex) {
	console.log(currentTabIndex);
}

export default function TabsTest() {
	const tabs = [
		{ label: "Tab 1", content: <div>This is content for Tab 1</div> },
		{ label: "Tab 2", content: <div>This is content for Tab 2</div> },
		{ label: "Tab 3", content: <RandomComponent /> },
	];

	return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
