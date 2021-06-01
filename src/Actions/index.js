const words = [
	"impossible",
	"Nurtau",
	"Cool",
	"is it hard",
	"react",
	"redux",
	"JavaScript",
	"the best",
];

export const selectWord = () => {
	return {
		type: "SELECT_WORD",
		payload: words[Math.floor(Math.random() * words.length)],
	};
};

export const fillGuessWord = (letter, word, guess) => {
	if (word.toLowerCase().includes(letter.trim().toLowerCase())) {
		[...word.toLowerCase()].forEach((symb, index) => {
			if (symb === letter.toLowerCase())
				guess =
					guess.substring(0, index) + word[index] + guess.substring(index + 1);
		});
	}
	return {
		type: "GUESS_WORD",
		payload: guess,
	};
};

export const checkLetter = (letter, word) => {
	if (!word.toLowerCase().includes(letter.trim().toLowerCase()))
		return {
			type: "BAN_LETTER",
			payload: letter,
		};
	return { type: "CORRECT_LETTER", payload: letter };
};
