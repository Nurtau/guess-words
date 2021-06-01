import React from "react";
import { connect } from "react-redux";

const Banned = ({ letters }) => {
	const letterString = letters.join(", ");
	return (
		<div>
			<p className="header">Absence</p>
			<hr style={{ border: "0.5px solid #fea82f", margin: "20px 0px" }} />
			<p className="text">{letterString}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { letters: state.bannedLetters };
};

export default connect(mapStateToProps)(Banned);
