import FieldLayout from './FieldLayout';

const Field = ({ setCurrentPlayer, setIsGameEnded, setIsDraw, field, setField }) => {
	return (
		<FieldLayout
			setCurrentPlayer={setCurrentPlayer}
			setIsGameEnded={setIsGameEnded}
			setIsDraw={setIsDraw}
			field={field}
			setField={setField}
		/>
	);
};

export default Field;
