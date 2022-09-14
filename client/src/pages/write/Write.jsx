import './write.css';

export default function Write() {
	return (
		<div className="write">
			<img className="writeImg" src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="" />
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i class="writeIcon fa-solid fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{ display: "none" }}/>
					<input type="text" placeholder="Title" className="writeInput" autofocus={true} />
				</div>
				<div className="writeFormGroup">
					<textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
				</div>
				<button className="writeSubmit">Publish</button>
			</form>
		</div>
	)
}