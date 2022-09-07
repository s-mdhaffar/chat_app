import add_avatar from '../img/add_avatar.png';

const Register = () => {
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Hedi Chat</span>
				<span className="title">Register</span>
				<form>
					<input type="text" placeholder="name" />
					<input type="email" placeholder="email" />
					<input type="password" placeholder="password" />
					<input type="file" id="file" style={{ display: 'none' }} />
					<label htmlFor="file">
						<img src={add_avatar} alt="" />
						<span>Add an Avatar</span>
					</label>
					<button>Sign Up</button>
				</form>
				<p>Do you have an account? log In</p>
			</div>
		</div>
	);
};

export default Register;
