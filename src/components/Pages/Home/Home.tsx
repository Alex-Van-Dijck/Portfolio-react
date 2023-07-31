import React, { useEffect, useRef } from "react";
import { Typography, useTheme, Box } from "@mui/material";
import head from "../../../Assets/Home/beeldinhoud.png";
import CardPage from "../ComponentPage/CardPage";
import ContactPage from "../Contact/Contact";
import styles from "./Home.module.css";
import useScrollSnap from "react-use-scroll-snap";
import About from "../AboutPage/About";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Home = () => {
	const theme = useTheme();

	useEffect(() => {
		document.title = "Alex Van Dijck";
	}, []);

	const scrollRef = useRef(null);
	useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

	return (
		<Box
			id="Top"
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
				<a href="#Portfolio">
					<KeyboardArrowDownIcon
						sx={{ color: "white" }}
						className={styles.firsticon}
					/>
				</a>
			</Box>
			<Box className={styles.Section} id="Portfolio">
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
				<a href="#AboutMe">
					<KeyboardArrowDownIcon className={styles.icon} />
				</a>
			</Box>
			<Box
				id="AboutMe"
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
				<a href="#Contact">
					<KeyboardArrowDownIcon
						className={styles.icon}
						sx={{ color: "white" }}
					/>
				</a>
			</Box>
			<Box className={styles.Section} id="Contact">
				<a href="#Top">
					<KeyboardArrowUpIcon className={styles.upicon} />
				</a>
				<ContactPage />
			</Box>
		</Box>
	);
};

export default Home;
