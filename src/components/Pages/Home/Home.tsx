import React, { useEffect, useRef } from "react";
import { Typography, useTheme, Box } from "@mui/material";
import head from "../../../Assets/Home/beeldinhoud.png";
import CardPage from "../ComponentPage/CardPage";
import ContactPage from "../Contact/Contact";
import styles from "./Home.module.css";
import useScrollSnap from "react-use-scroll-snap";
import About from "../AboutPage/About";
const Home = () => {
	const theme = useTheme();

	useEffect(() => {
		document.title = "Alex Van Dijck";
	}, []);

	const scrollRef = useRef(null);
	useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

	return (
		<Box
			style={{
				position: "relative",
			}}
			ref={scrollRef}
		>
			<Box
				sx={{
					backgroundColor: theme.palette.secondary.main,
				}}
				className={styles.Section}
			>
				<img
					src={head}
					style={{ maxWidth: "300px", maxHeight: "300px" }}
					alt="Profielfoto Alex"
				/>
				<Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
					<Typography
						sx={{
							fontWeight: "bold",
							borderBottom: "3px solid " + theme.palette.secondary.light,
							typography: { sm: "h2", xs: "h3" },
						}}
						color={"white"}
					>
						Alex Van Dijck
					</Typography>
					<Typography variant="h5" color={"white"}>
						Full Stack Developer
					</Typography>
				</Box>
			</Box>
			<Box className={styles.Section}>
				<Typography
					variant="h3"
					sx={{
						fontWeight: "bold",
						borderBottom: "3px solid " + theme.palette.secondary.light,
					}}
					color={theme.palette.secondary.dark}
				>
					Portfolio
				</Typography>
				<CardPage searchBar={false} limitCards={true} />
			</Box>
			<Box
				sx={{
					backgroundColor: theme.palette.secondary.main,
				}}
				className={styles.Section}
			>
				<Typography
					variant="h3"
					sx={{
						fontWeight: "bold",
						borderBottom: "3px solid " + theme.palette.secondary.light,
					}}
					color={"white"}
				>
					About me
				</Typography>
				<About />
			</Box>
			<Box className={styles.Section}>
				<ContactPage />
			</Box>
		</Box>
	);
};

export default Home;
