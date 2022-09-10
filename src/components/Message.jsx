import React from 'react';

const Message = () => {
	return (
		<div className="message owner">
			<div className="messageInfo">
				<img
					src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960"
					alt=""
				/>
				<span>Just now</span>
			</div>
			<div className="messageContent">
				<p>Hello</p>
				<img
					src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Message;
