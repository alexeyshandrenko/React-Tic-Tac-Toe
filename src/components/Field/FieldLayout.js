import styles from './field.module.css';
import x from './../../assets/x.svg';
import o from './../../assets/o.svg';
import { store } from '../../store/store';

const FieldLayout = ({ doStep }) => {
	const { getState } = store;
	const { field } = getState();

	return (
		<ul className={styles.field}>
			{field.map((field, index) => {
				return (
					<li className={styles.fieldCell} key={index}>
						<button onClick={() => doStep(index)}>
							{field === 'x' ? (
								<img src={x} alt="x" />
							) : field === '0' ? (
								<img src={o} alt="0" />
							) : null}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default FieldLayout;
