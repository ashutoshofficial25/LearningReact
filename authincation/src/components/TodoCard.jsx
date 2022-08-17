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
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

const TodoCard = ({ title }) => {
  const [item, setItem] = useState([]);

  return (
    <Card
      elevation={8}
      sx={{ textAlign: "center", borderTop: "3px dashed red" }}
    >
      <CardHeader title={title} />
      <Divider />
      <CardContent>
        <TextField
          label="Enter task description. . ."
          multiline
          rows={5}
          placeholder="Start writing . . ."
        />
      </CardContent>
      <Box pr={3} textAlign="end">
        <DeleteIcon sx={{ color: red[700] }} />
      </Box>
    </Card>
  );
};

export default TodoCard;
