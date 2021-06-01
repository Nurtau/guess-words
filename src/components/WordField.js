import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectWord } from "../Actions";

const WordField = ({ selectWord, word, placeholder }) => {
	useEffect(() => {
		selectWord();
	}, [selectWord]);

	return (
		<>
			<div className="ui center aligned huge header">
				<p className="word">{placeholder}</p>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return { placeholder: state.guessWord, word: state.word };
};

export default connect(mapStateToProps, { selectWord })(WordField);
