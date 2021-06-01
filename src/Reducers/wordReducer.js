const wordReducer = (word = "", action) => {
	switch (action.type) {
		case "SELECT_WORD":
			return action.payload;
		default:
			return word;
	}
};

export default wordReducer;