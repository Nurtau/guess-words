const guessWordReducer = (word = "", action) => {
	switch (action.type) {
		case "GUESS_WORD":
			return action.payload;
		case "SELECT_WORD":
			const tempWord = action.payload;
			let guess = "";
			[...tempWord].forEach((symb) => {
				if (symb !== " ") guess += "-";
				else guess += " ";
			});
			return guess;
		default:
			return word;
	}
};

export default guessWordReducer;
