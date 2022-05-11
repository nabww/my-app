import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  state = {
    editing: false,
  };

  render() {
    let viewMode = {};
    let editMode = {};

    if (this.state) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            handleEditing={this.props.handleEditing}
            setUpdate={this.props.setUpdate}
            handleUpdateDone={this.handleUpdateDone}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
