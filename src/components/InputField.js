import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { checkLetter, fillGuessWord } from "../Actions";

const InputField = ({ checkLetter, fillGuessWord, placeholder, word }) => {
	const [letter, setLetter] = useState("");
	const inputEl = useRef(null);

	useEffect(() => {
		inputEl.current.focus();
	}, []);

	const onFormSumbit = (e) => {
		e.preventDefault();
		checkLetter(letter, word);
		fillGuessWord(letter, word, placeholder);
		setLetter("");
	};
	const onInputChange = (e) => {
		const letter = e.target.value;
		if (letter === "") setLetter("");
		else setLetter(letter[letter.length - 1]);
	};

	return (
		<form onSubmit={onFormSumbit} style={{ width: "100%", marginBottom: "15px"}}>
			<div className="ui action input" style={{ width: "100%", marginBottom: "15px"}}>
				<input
					style={{color: "#ff6701"}}
					ref={inputEl}
					type="text"
					value={letter}
					onChange={onInputChange}
					placeholder="Find a word"
				/>
			</div>
		</form>
	);
};

const mapStateToProps = (state) => {
	return { placeholder: state.guessWord, word: state.word };
};

export default connect(mapStateToProps, { checkLetter, fillGuessWord })(
	InputField
);
