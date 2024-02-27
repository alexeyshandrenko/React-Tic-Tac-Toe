import Title from '../../core/ui/Title';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	if (isDraw) {
		return <Title>Ничья</Title>;
	}
	if (!isDraw && isGameEnded) {
		return <Title>{`Победа: ${currentPlayer}`}</Title>;
	}
	return <Title>{`Ходит: ${currentPlayer}`}</Title>;
};

export default InformationLayout;
