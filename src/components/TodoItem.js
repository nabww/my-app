import React from "react";
import styles from ".././TodoItem.module.css";

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    console.log("edit mode activated");
    this.setState({ editing: true });
  };

  handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  };

  componentWillUnmount() {
    console.log("Cleaning up...");
  }

  render() {
    const { completed, id, title } = this.props.todo;
    let viewMode = {};
    let editMode = {};

    if (this.state) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.props.handleEditing} style={this.viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? this.completedStyle : null}>{title}</span>
          <input
            type="text"
            style={this.editMode}
            className={styles.textInput}
            value={title}
            onChange={(e) => {
              this.props.setUpdate(e.target.value, id);
            }}
            onKeyDown={this.handleUpdateDone}
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
