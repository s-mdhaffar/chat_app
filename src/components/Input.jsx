import Add from '../img/img.png';
import attach from '../img/attach.png';

const Input = () => {
	return (
		<div className="input">
			<input type="text" placeholder="Type something..." />
			<div className="send">
				<img src={attach} alt="" />
				<input type="file" style={{ display: 'none' }} id="attach" />
				<label htmlFor="attach">
					<img src={Add} alt="" />
				</label>
				<button>Send</button>
			</div>
		</div>
	);
};

export default Input;
