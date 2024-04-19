import Title from '../../core/ui/Title';
import { store } from '../../store/store';

const InformationLayout = ({ isGameEnded, isDraw }) => {
	const { getState } = store;
	const { currentPlayer } = getState();

	if (isDraw) {
		return <Title>Ничья</Title>;
	}
	if (!isDraw && isGameEnded) {
		return <Title>{`Победа: ${currentPlayer}`}</Title>;
	}
	return <Title>{`Ходит: ${currentPlayer}`}</Title>;
};

export default InformationLayout;
