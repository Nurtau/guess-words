import React from "react";
import Banned from "./Banned";
import WordField from "./WordField";
import Message from "./Message";
import InputField from "./InputField";
import Restart from "./Restart";
import "./global.css";

const App = () => {
	return (
		<div className="ui container" style={{ marginTop: "140px" }}>
			<div style={{ marginBottom: "160px" }}>
				<WordField />
			</div>

			<div className="ui three column very relaxed center aligned grid">
				<div className="column">
						<Message />
				</div>
				<div className="4 column">
						<InputField />
						<Restart/>
				</div>
				<div className="column">
					<Banned />
				</div>
			</div>
		</div>
	);
};

export default App;
