import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AddCard from "../components/AddCard";
import TodoCard from "../components/TodoCard";
import AddIcon from "@mui/icons-material/Add";

const Homepage = () => {
  const [count, setCount] = useState(0);
  let card = [];
  const addNewCard = () => {
    card.push(content());
    console.log(content);
  };

  const content = () => {
    return (
      <Grid item spacing={3}>
        <AddCard />
      </Grid>
    );
  };

  return (
    <Container>
      <Box sx={{ backgroundColor: "rgb(0 89 179)" }}>
        <h2>Homepage</h2>
        <div>{count}</div> <AddIcon onClick={() => setCount(count + 1)} />
      </Box>
      {console.log(card)}
      {card}
      <Grid container>
        <Grid item spacing={3}>
          <TodoCard addNewCard={addNewCard} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
