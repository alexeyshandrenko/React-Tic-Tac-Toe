import styles from './game.module.css';
import Field from '../Field';
import InformationLayout from '../Information';
import Button from '../../core/ui/Button';
import Particles from 'react-particles';

import { particleConfig } from '../../core/config/particleConfig';

const GameLayout = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	field,
	setField,
	restartGame,
	particleInit,
}) => {
	return (
		<main className={styles.layout}>
			<InformationLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				field={field}
				setField={setField}
			/>
			{isGameEnded && <Button onClick={restartGame}>Начать заново</Button>}
			{isGameEnded && !isDraw && (
				<Particles options={particleConfig} init={particleInit} />
			)}
		</main>
	);
};

export default GameLayout;
