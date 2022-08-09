import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const TodoCard = ({ addNewCard }) => {
  return (
    <Box>
      <Card sx={{ backgroundColor: "#001f3b", width: "280px" }}>
        <CardHeader title="Add new card" />
        <Divider />
        <CardContent onClick={() => addNewCard()}>
          <AddIcon />
        </CardContent>
      </Card>
    </Box>
  );
};

export default TodoCard;
