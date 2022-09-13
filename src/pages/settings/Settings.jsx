import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Your Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img src="https://i.picsum.photos/id/701/1200/800.jpg?hmac=xqUVQwziEl5v4TX03i0yUjjX-5_m19Aei4vD8jOyeRk" alt="" />
						<label htmlFor="fileInput">
							<i className="settingsPPIcon fa-regular fa-circle-user"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Reuben" />
					<label>Email</label>
					<input type="email" placeholder="Reuben@gmail.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	)
}