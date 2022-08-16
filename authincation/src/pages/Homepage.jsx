import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TodoCard from "../components/TodoCard";

const Homepage = () => {
  const [count, setCount] = useState(0);
  const [card, setCard] = useState([]);

  const addNewCard = (item) => {
    setCard([...card, item]);
  };

  return (
    <Container>
      <Card>
        <Box py={5} textAlign={"center"}>
          <CardHeader title="Task List" />
          <Button variant="contained">Add New Task</Button>
        </Box>
        <Divider sx={{ border: "1px solid #001122" }} />
        <CardContent sx={{ backgroundColor: "#103311" }}>
          <TodoCard />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Homepage;
