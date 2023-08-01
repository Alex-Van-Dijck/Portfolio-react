import { Box, Typography, useTheme } from "@mui/material";
import head from "../../../Assets/Home/beeldinhoud.png";

const Info = () => {
	const theme = useTheme();

	return (
		<Box>
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
	);
};

export default Info;
