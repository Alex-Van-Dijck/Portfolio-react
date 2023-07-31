import { Box, IconButton, Typography } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

const About = () => {
	const nav = useNavigate();
	return (
		<Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
			<Typography variant="h6" color={"white"}>
				Hi, my name is Alex and I am a Junior Full Stack Developer based near
				Antwerp.
				<br /> I like to describe myself as a passionate problem solver who
				thrives in collaborative environments.
			</Typography>

			<Box>
				<a
					href="https://www.linkedin.com/in/alex-van-dijck-442375231/"
					target="_blank"
					rel="noreferrer"
				>
					<IconButton aria-label="LinkedIn" sx={{ color: "white" }}>
						<LinkedInIcon sx={{ color: "white" }} />
					</IconButton>
				</a>
				<a
					href="https://github.com/Alex-Van-Dijck"
					target="_blank"
					rel="noreferrer"
				>
					<IconButton aria-label="LinkedIn" sx={{ color: "white" }}>
						<GitHubIcon />
					</IconButton>
				</a>
			</Box>
		</Box>
	);
};

export default About;
