import React, { useState } from "react";
import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import { Container, List } from "./Styled";

export default function TodoList({ todos, newTodo, onDelete }) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: [],
  //     newTodo: ""
  //   };
  //   this.handleNewChange = this.handleNewChange.bind(this);
  //   this.handleNewSubmit = this.handleNewSubmit.bind(this);
  //   this.handleDelete = this.handleDelete.bind(this);
  //   this.handleCompletedToggle = this.handleCompletedToggle.bind(this);
  // }
  const [newTodo, updateNewTodo] = useState("");
  const [todos, updateTodos] = useState([]);

  const handleNewChange = (e) => {
    updateNewTodo(e.target.value);
  };
  const handleNewSubmit = (e, id) => {
    e.preventDefault();
    updateTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: newTodo, completed: false },
    ]);
    updateNewTodo("");
  };

  const handleDelete = (id, e) => {
    updateTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const handleCompletedToggle = (id, e) => {
    updateTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // const { newTodo, todos } = this.state;
  return (
    <Container todos={todos}>
      <NewTodo
        onSubmit={handleNewSubmit}
        value={newTodo}
        onChange={handleNewChange}
      />
      {!!todos.length && (
        <List>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={handleCompletedToggle}
              onDelete={handleDelete}
            />
          ))}
        </List>
      )}
    </Container>
  );
}
