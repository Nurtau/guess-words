import React from "react";
import { connect } from "react-redux";
import { selectWord } from "../Actions";
import "./global.css";

const Restart = ({ selectWord }) => {
	return (
		<button
			onClick={() => selectWord()}
			className="ui icon button"
			id="restart-btn"
		>
			<i class="redo icon"></i>
		</button>
	);
};

export default connect(null, { selectWord })(Restart);
