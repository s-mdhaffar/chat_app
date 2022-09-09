import React from 'react';

const Search = () => {
	return (
		<div className="search">
			<div className="searchForm">
				<input type="text" />
			</div>
			<div className="userChat">
				<img
					src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960"
					alt=""
				/>
				<div className="userChatInfo">
					<span>Jane</span>
				</div>
			</div>
		</div>
	);
};

export default Search;
