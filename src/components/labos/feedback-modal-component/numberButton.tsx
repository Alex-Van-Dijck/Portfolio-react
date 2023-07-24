interface INumberButton {
	number: number;
	className: string;
	onClick: () => void;
}

const NumberButton = ({ number, className, onClick }: INumberButton) => {
	return (
		<button onClick={onClick} className={className}>
			{number}
		</button>
	);
};

export default NumberButton;
