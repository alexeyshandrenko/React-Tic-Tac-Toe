import FieldLayout from './FieldLayout';

const Field = ({ setCurrentPlayer, setIsGameEnded, setIsDraw, field, setField }) => {
	const doStep = (id) => {};

	return <FieldLayout field={field} doStep={doStep} />;
};

export default Field;
