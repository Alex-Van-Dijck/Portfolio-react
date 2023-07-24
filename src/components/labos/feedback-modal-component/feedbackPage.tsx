import { useState } from "react";
import { Button } from "@mui/material";
import FeedbackPopup from "./feedbackPopup";
import styles from "./feedback.module.css";
import { useTheme } from "@mui/material";

const FeedBackPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const theme = useTheme();

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.root}>
			<Button
				variant="contained"
				onClick={handleToggle}
				style={{ marginBottom: "1rem" }}
			>
				Show popup
			</Button>
			{isOpen && (
				<FeedbackPopup
					onSubmit={() => {
						handleToggle();
					}}
				/>
			)}
			<footer
				className={styles.footer}
				style={{ color: theme.palette.text.primary }}
			>
				<span>Design by </span>
				<a href="https://www.frontendpro.dev/frontend-coding-challenges/feedback-modal-component-Dh1l0ru6tRXHWiudIEmA">
					FrontendPro
				</a>
				.
			</footer>
		</div>
	);
};

export default FeedBackPage;
