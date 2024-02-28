export const defineVictory = (field, role, strategies) => {
	let isWin = false;
	for (let i = 0; i < strategies.length; i++) {
		isWin = strategies[i].every((position) => {
			return field[position] === role;
		});
		if (isWin) {
			break;
		}
	}
	return isWin;
};

export const defineDraw = (field) => field.every((el) => el);
