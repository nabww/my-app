import React from "react";
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [],
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

  onKeyPressed = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  };

  componentDidMount1 = () => {
    document.addEventListener(
      "keydown",
      (e) => e.code === "Enter" && console.log(this.setUpdate)
    );
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", temp);
    }
  }

  render() {
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
            //handleEditing={this.handleEditing}
            setUpdate={this.setUpdate}
            //onKeyDown={this.onKeyPressed}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
