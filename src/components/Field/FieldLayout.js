import styles from './field.module.css';

const FieldLayout = ({
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	field,
	doStep,
	setField,
}) => {
	return (
		<ul className={styles.field}>
			{field.map((field, index) => {
				return (
					<li className={styles.fieldCell} key={index}>
						<button onClick={() => doStep(index)}>{field}</button>
					</li>
				);
			})}
		</ul>
	);
};

export default FieldLayout;
