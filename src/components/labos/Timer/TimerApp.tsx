import React from "react";
import Timer from "./timer";
import CurrentTime from "./currentTime";
import RandomValue from "./RandomValue";
import { Grid } from "@mui/material";

function TimerApp() {
	return (
		<Grid
			container
			direction="column"
			spacing={2}
			justifyContent="center"
			alignItems="center"
			marginTop={2}
		>
			<Grid item>
				<Timer />
			</Grid>
			<Grid item>
				<CurrentTime />
			</Grid>
			<Grid item>
				<RandomValue min={1} max={100} />
			</Grid>
			<Grid item>
				<RandomValue min={100} max={200} />
			</Grid>
		</Grid>
	);
}

export default TimerApp;
