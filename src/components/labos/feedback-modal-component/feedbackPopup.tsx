import NumberButton from "./numberButton";
import styles from "./feedback.module.css";
import { useState } from "react";

interface IFeedbackPopup {
	onSubmit: () => void;
}

const FeedbackPopup = ({ onSubmit }: IFeedbackPopup) => {
	const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [activeButton, setActiveButton] = useState<number>();

	return (
		<div className={styles.popupContainer}>
			<div className={styles.container}>
				<div className={styles.topText}>
					How likely are you to recommend this website
					<br /> to someone you know?
				</div>
				<div className={styles.numberRowContainer}>
					<div className={styles.numberRow}>
						{numbers.map((number, index) => (
							<NumberButton
								onClick={() => {
									setActiveButton(index);
								}}
								className={
									activeButton === index
										? styles.numberButtonClicked
										: styles.numberButton
								}
								number={number}
							/>
						))}
					</div>
					<div className={styles.likelyRowContainer}>
						<div>Not likely at all</div>
						<div>Extremely Likely</div>
					</div>
				</div>
				<div className={styles.buttonRow}>
					<button onClick={onSubmit} className={styles.buttonEmpty}>
						Cancel
					</button>
					<button onClick={onSubmit} className={styles.buttonFilled}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeedbackPopup;
