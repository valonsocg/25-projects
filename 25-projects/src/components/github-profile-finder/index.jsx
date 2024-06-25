import { useEffect, useState } from "react";
import "./styles.css";
import User from "./user";

export default function GithubProfileFinder() {
	const [userName, setUserName] = useState("valonsocg");
	const [userData, setUserData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	async function fetchGithubUserData() {
		try {
			setIsLoading(true);
			const res = await fetch(`https://api.github.com/users/${userName}`);
			const data = await res.json();

			if (data) {
				setIsLoading(false);
				setUserData(data);
				setUserName("");
			}
			console.log(data);
		} catch (error) {
			setError(error.message);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchGithubUserData();
	}, []);

	function handleSubmitUsername(event) {
		event.preventDefault();
		fetchGithubUserData();
	}

	if (isLoading) {
		return <h1>Loading data! Please wait ...</h1>;
	}
	return (
		<div className="github-profile-container">
			<form className="input-wrapper" onSubmit={handleSubmitUsername}>
				<input
					name="search-by-username"
					onChange={(event) => setUserName(event.target.value)}
					type="text"
					placeholder="Search Github username..."
					value={userName}
				/>
				<button type="submit">Search</button>
			</form>
			{userData !== null && <User user={userData} />}
		</div>
	);
}
