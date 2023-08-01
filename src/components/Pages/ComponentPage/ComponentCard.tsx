import React, { CSSProperties } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ComponentCard.module.css";

export interface ICardProps {
	imgPath: string;
	title: string;
	description: string;
	style?: CSSProperties;
}

const ComponentCard = ({ style, imgPath, title, description }: ICardProps) => {
	const nav = useNavigate();

	return (
		<div style={style}>
			<Card
				sx={{ maxWidth: 345 }}
				style={{ width: "22rem" }}
				className={styles.zoom}
			>
				<CardActionArea
					onClick={() => {
						nav("/Portfolio/" + title);
					}}
				>
					<CardMedia
						component="img"
						height="140"
						image={imgPath}
						sx={{ objectFit: "contain" }}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							style={{ height: "5rem" }}
						>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default ComponentCard;
