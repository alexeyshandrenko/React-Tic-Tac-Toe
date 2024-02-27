import styles from './field.module.css';

const FieldLayout = ({
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	field,
	setField,
}) => {
	return (
		<ul className={styles.field}>
			{field.map((field, index) => {
				return (
					<li className={styles.fieldCell} key={index}>
						<button></button>
					</li>
				);
			})}
		</ul>
	);
};

export default FieldLayout;
