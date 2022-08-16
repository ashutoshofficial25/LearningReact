import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const TodoCard = ({ addNewCard }) => {
  let [item, setItem] = useState([]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Card sx={{ textAlign: "center", borderTop: "3px dashed red" }}>
          <CardHeader title="Card Title" />
          <Divider />
          <CardContent>
            <TextField
              label="Enter your task"
              multiline
              rows={5}
              placeholder="Start writing . . ."
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card sx={{ textAlign: "center", borderTop: "3px dashed red" }}>
          <CardHeader title="Card Title" />
          <Divider />
          <CardContent>
            <TextField
              label="Enter your task"
              multiline
              rows={5}
              placeholder="Start writing . . ."
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card sx={{ textAlign: "center", borderTop: "3px dashed red" }}>
          <CardHeader title="Card Title" />
          <Divider />
          <CardContent>
            <TextField
              label="Enter your task"
              multiline
              rows={5}
              placeholder="Start writing . . ."
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card sx={{ textAlign: "center", borderTop: "3px dashed red" }}>
          <CardHeader title="Card Title" />
          <Divider />
          <CardContent>
            <TextField
              label="Enter your task"
              multiline
              rows={5}
              placeholder="Start writing . . ."
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TodoCard;
