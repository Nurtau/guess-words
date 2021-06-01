import { combineReducers } from "redux";

import wordReducer from "./wordReducer";
import guessWordReducer from "./guessWordReducer";
import bannedLetterReducer from "./bannedLetterReducer";
import letterReducer from "./letterReducer";

export default combineReducers({
	word: wordReducer,
	guessWord: guessWordReducer,
	bannedLetters: bannedLetterReducer,
	letter: letterReducer,
});
