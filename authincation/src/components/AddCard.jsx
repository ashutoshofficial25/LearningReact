import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";

const AddCard = ({ card }) => {
  useEffect(() => {
    console.log(card);
  }, []);

  return (
    <Card sx={{ width: "280px" }}>
      <CardHeader title="Write Here" />
      <Divider />
      <CardContent>
        <TextField
          id="outlined-multiline-static"
          label="Your text here"
          multiline
          rows={4}
          defaultValue=""
        />
      </CardContent>
    </Card>
  );
};

export default AddCard;
