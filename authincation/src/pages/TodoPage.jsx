import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

import CustomDialog from "../components/CustomDialog";
import TodoCard from "../components/TodoCard";

const TodoPage = () => {
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const addNewCard = (item) => {
    setCard([...card, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskTitle, taskDesc);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddTask = () => {
    setOpen(false);
    addNewCard();
  };

  const content = () => {
    return (
      <form onSubmit={handleSubmit}>
        <Box px={5} textAlign="center">
          <TextField
            sx={{ marginBottom: "10px" }}
            label="Enter task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            fullWidth
          />
          <br />
          <TextField
            sx={{ marginBottom: "10px" }}
            label="Enter task description. . ."
            multiline
            fullWidth
            rows={5}
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            placeholder="Start writing . . ."
          />
          <br />
          <Button type="submit" variant="contained" onClick={handleAddTask}>
            Add
          </Button>
        </Box>
      </form>
    );
  };

  return (
    <Fragment>
      <Container>
        <Card>
          <Box py={5} textAlign={"center"}>
            <CardHeader title="Task List" />
            <Button variant="contained" onClick={handleClick}>
              Add New Task
            </Button>
          </Box>
          <Divider sx={{ border: "1px solid #001122" }} />
          <CardContent sx={{ backgroundColor: "#103311" }}>
            <Grid container spacing={2}>
              {card.map((item) => (
                <Grid item xs={3}>
                  <TodoCard title={taskTitle} taskDesc={taskDesc} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <CustomDialog
        open={open}
        onClose={() => handleClose()}
        title="Create Your Task"
        fullWidth
      >
        {content()}
      </CustomDialog>
    </Fragment>
  );
};

export default TodoPage;
