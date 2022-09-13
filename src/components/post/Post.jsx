import './post.css';

export default function Post() {
	return (
		<div className="post">
			<img className="postImg" src="https://i.picsum.photos/id/348/600/400.jpg?hmac=4Dcyl-sUcE8E-OcM3fH9B9ZjixPbKGEnQ-FUPaZzQ4Y" alt="" />
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">
					Lorem Impusm
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p> 
		</div>
	)
}