import React, { useContext } from "react";
import { List, ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoContext } from "../Context/TodoContext";
import { REMOVE_TODO } from "../Context/action.types";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mt-5 nb-3 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            className="float-right"
            style={{ float: "right" }}
            onClick={() =>
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id,
              })
            }
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
