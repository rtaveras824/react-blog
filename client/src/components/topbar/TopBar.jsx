import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
	const user = false;
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-square-facebook"></i>
				<i className="topIcon fa-brands fa-square-twitter"></i>
				<i className="topIcon fa-brands fa-square-pinterest"></i>
				<i className="topIcon fa-brands fa-square-instagram"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">HOME</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/about">ABOUT</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/">CONTACT</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">WRITE</Link>
					</li>
					<li className="topListItem">
						{ user && <Link className="link" to="/">LOGOUT</Link> }
					</li>
				</ul>
			</div>
			<div className="topRight">
				{ user ? (
					<img className="topImg" src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="Profile picture" />
					) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
					)}
				
				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	)
}