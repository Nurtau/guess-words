const letterReducer = (letObj={isCorrect: true, letter:"start"}, action) => {
	switch(action.type) {
		case "SELECT_WORD":
			return {isCorrect: true, letter:"start"};
		case "BAN_LETTER":
			return {
				isCorrect: false,
				letter: action.payload
			};
		case "CORRECT_LETTER":
			return {
				isCorrect: true,
				letter: action.payload
			};
		default:
			return letObj;
	}
}


export default letterReducer;