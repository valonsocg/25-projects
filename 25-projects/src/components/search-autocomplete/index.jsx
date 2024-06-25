import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [searchParams, setSearchParams] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [filteredUsers, setFilteredUsers] = useState([]);

	function handleChange(event) {
		const query = event.target.value.toLowerCase();
		setSearchParams(query);
		if (query.length > 1) {
			const filteredData = users?.length
				? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
				: [];
			setFilteredUsers(filteredData);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	}

	async function fetchListOfUsers() {
		try {
			setIsLoading(true);
			const res = await fetch("https://dummyjson.com/users");
			const data = await res.json();

			if (data?.users?.length) {
				setUsers(data.users.map((userItem) => userItem.firstName));
				setIsLoading(false);
				setError(null);
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchListOfUsers();
	}, []);

	function handleClick(event) {
		setShowDropdown(false);
		setSearchParams(event.target.innerText);
		setFilteredUsers([]);
	}

	console.log(users, filteredUsers);

	return (
		<div className="search-autocomplete-container">
			{isLoading ? (
				<h1>Loading data, please wait...</h1>
			) : (
				<input
					type="text"
					value={searchParams}
					name="search-users"
					placeholder="Search users here..."
					onChange={handleChange}
				/>
			)}
			{showDropdown && (
				<Suggestions data={filteredUsers} handleClick={handleClick} />
			)}
		</div>
	);
}
