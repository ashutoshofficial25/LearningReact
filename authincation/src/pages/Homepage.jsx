import React, { useState } from "react";
import { Container } from "@mui/material";

import TodoPage from "./TodoPage";

const Homepage = () => {
  const [count, setCount] = useState(0);
  const [card, setCard] = useState([]);

  const addNewCard = (item) => {
    setCard([...card, item]);
  };

  return (
    <Container>
      <TodoPage />
    </Container>
  );
};

export default Homepage;
