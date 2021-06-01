import React from "react";
import { connect } from "react-redux";

const Message = ({ letObj }) => {
	let strMessage;
	switch (letObj.letter) {
		case "start":
			strMessage = "Try to find the word by guessing";
			break;
		case " ":
		case "":
			strMessage = "It is invalid";
			break;
		default:
			if (letObj.isCorrect) {
				strMessage = `You are right, ${letObj.letter} is here`;
			} else {
				strMessage = `You are wrong, ${letObj.letter} is not here`;
			}
	}
	return <div >
		<p className="header" >Message</p>
		<hr style={{border: "0.5px solid #fea82f", margin: "20px 0px"}}/>
		<p className="text" >{strMessage}</p>
		</div>;	
};

const mapStateToProps = (state) => {
	return {
		letObj: state.letter,
	};
};

export default connect(mapStateToProps)(Message);
