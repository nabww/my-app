import React from "react";
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        default: false,
      },

      {
        id: uuidv4(),
        title: "Develop website and add content",
        default: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        default: false,
      },
    ],
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
    console.log("edit mode activated");
  };

  handleChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };

  delTodo = (id) => {
    console.log("deleted", id);
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  handleUpdatedDone = (event) => {
    console.log("hello");
  };

  render() {
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <div className="=container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            editing={this.state.editing}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            handleEditing={this.handleEditing}
            setUpdate={this.setUpdate}
            handleUpdatedDone={this.handleUpdatedDone}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
