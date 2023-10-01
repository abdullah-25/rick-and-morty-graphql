import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router";
import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  console.log(error, loading, data);

  if (error) {
    return <div>error</div>;
  }
  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={data.character.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.character.gender}
            </Typography>
          </CardContent>
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </CardActionArea>
      </Card>
    </>
  );
}
