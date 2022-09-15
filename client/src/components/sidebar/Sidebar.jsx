import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get('/categories');
			setCats(res.data);
		}

		getCats();
	}, [])
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img src="https://i.picsum.photos/id/770/200/200.jpg?hmac=QFpEnsRd_HVWziMxXltLr7icjRJhyhL7vsBAwyXrotA" alt="dunno" />
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					{
						cats.map((c) => (
							<Link to={`/?cat=${ c.name }`} className="link">
								<li className="sidebarListItem">{ c.name }</li>
							</Link>
						))
					}
					
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-square-facebook"></i>
					<i className="sidebarIcon fa-brands fa-square-twitter"></i>
					<i className="sidebarIcon fa-brands fa-square-pinterest"></i>
					<i className="sidebarIcon fa-brands fa-square-instagram"></i>
				</div>
			</div>
		</div>
	)
}