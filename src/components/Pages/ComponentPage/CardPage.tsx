import React, { useEffect, useState } from "react";
import ComponentCard, { ICardProps } from "./ComponentCard";
import styles from "./CardPage.module.css";
import { TextField } from "@mui/material";
import poke5 from "../../../Assets/Portfolio/Poke5.png";
import shopping from "../../../Assets/Portfolio/shopping.png";
import TicTacToe from "../../../Assets/Portfolio/TicTacToe.png";
import Todo from "../../../Assets/Portfolio/Todo.png";
import slots from "../../../Assets/Slots/cherry.png";
import dadJoke from "../../../Assets/Portfolio/dadJoke.png";
import ColorSelect from "../../../Assets/Portfolio/ColorSelect.png";
import Timer from "../../../Assets/Portfolio/Timer.png";
import weather from "../../../Assets/Portfolio/weather.png";
import LoveCalculator from "../../../Assets/Portfolio/LoveCalculator.png";
import FeedbackPopup from "../../../Assets/Portfolio/FeedbackPopup.png";

interface ICardPage {
	searchBar: boolean;
	limitCards: boolean;
}

const CardPage = ({ limitCards, searchBar }: ICardPage) => {
	const [filterText, setFilterText] = useState<string>("");

	useEffect(() => {
		document.title = "Portfolio";
	}, []);

	const Cardlist: ICardProps[] = [
		{
			title: "FeedbackPopup",
			description:
				"This app gives you a popup where you can provide a rating by number.",
			imgPath: FeedbackPopup,
		},
		{
			title: "Shoppinglist",
			description: "This app lets you add & remove items from a shoppinglist",
			imgPath: shopping,
		},
		{
			title: "Todo",
			description:
				"This app contains a list of tasks that you can add and delete. The app also includes an input field where you can add a new task.",
			imgPath: Todo,
		},
		{
			title: "ColorSelect",
			description:
				"This app displays and allows the user to modify a list of selected colors.",
			imgPath: ColorSelect,
		},
		{
			title: "TicTacToe",
			description: "This app lets you play a game of TicTacToe.",
			imgPath: TicTacToe,
		},
		{
			title: "Pokemon",
			description:
				"This app makes an api call to https://pokeapi.co/, displays a chosen number of pokemon and has a searchfield.",
			imgPath: poke5,
		},
		{
			title: "Slots",
			description: "This app lets you play multiple games of Slots.",
			imgPath: slots,
		},
		{
			title: "DadJoke",
			description:
				"This app displays and allows the user to refresh or save a dad joke fetched from an API, and displays the last saved favorite joke.",
			imgPath: dadJoke,
		},
		{
			title: "Timer",
			description:
				"This app displays and updates elapsed time, current time, and a random number using setInterval and useEffect.",
			imgPath: Timer,
		},
		{
			title: "Weather",
			description:
				"This app is a weather forecast app that displays a table of weather data by making a GET request to an API.",
			imgPath: weather,
		},
		{
			title: "LoveCalculator",
			description:
				"This app calculates love compatibility based on two names and displays the result as a percentage and description.",
			imgPath: LoveCalculator,
		},
	];

	limitCards && Cardlist.splice(4, Cardlist.length - 3);

	return (
		<div className={styles.rootContainer}>
			{searchBar && (
				<TextField
					label="Search"
					variant="outlined"
					margin="normal"
					type="search"
					onChange={(event) => setFilterText(event.target.value)}
					value={filterText}
				/>
			)}
			<div className={styles.container}>
				{Cardlist.filter((c) =>
					c.title.toUpperCase().startsWith(filterText.toUpperCase())
				).map((card: ICardProps) => (
					<ComponentCard
						title={card.title}
						description={card.description}
						imgPath={card.imgPath}
					/>
				))}
			</div>
		</div>
	);
};

export default CardPage;
