const bannedLetterReducer = (letters = [], action) => {
	switch (action.type) {
		case "SELECT_WORD":
			return [];
		case "BAN_LETTER":
			return [...new Set([...letters, action.payload])];
		default:
			return letters;
	}
};

export default bannedLetterReducer;