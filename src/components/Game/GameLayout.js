import styles from './game.module.css';
import InformationLayout from '../Information';
import FieldLayout from '../Field';
import Button from '../../core/ui/Button';
import Particles from 'react-particles';

import { particleConfig } from '../../core/config/particleConfig';

const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	restartGame,
	particleInit,
	doStep,
}) => {
	return (
		<main className={styles.layout}>
			<InformationLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldLayout field={field} doStep={doStep} />
			{isGameEnded && <Button onClick={restartGame}>Начать заново</Button>}
			{isGameEnded && !isDraw && (
				<Particles options={particleConfig} init={particleInit} />
			)}
		</main>
	);
};

export default GameLayout;
