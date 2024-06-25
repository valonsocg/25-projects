export default function Suggestions({ data, handleClick }) {
	return (
		<ul>
			{data?.length
				? data.map((item, index) => (
						<li key={index} onClick={handleClick}>
							{item}
						</li>
					))
				: null}
		</ul>
	);
}
