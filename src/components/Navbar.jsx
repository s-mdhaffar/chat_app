import React from 'react';

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">Hedi Chat</span>
			<div className="user">
				<img
					src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960"
					alt=""
				/>
				<span>John</span>
				<button>Log Out</button>
			</div>
		</div>
	);
};

export default Navbar;
