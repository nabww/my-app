import React from "react";
import styles from ".././TodoItem.module.css";
//import TodoContainer from "./TodoContainer";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = props.todo;

  return (
    <li className={styles.item}>
      <div
        onDoubleClick={props.handleEditing}
        /*style={viewMode}*/
      >
        <input
          onKeyDown={props.handleUpdatedDone}
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
        <input
          type="text"
          //style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            props.setUpdate(e.target.value, id);
          }}
        />
      </div>
    </li>
  );
}

export default TodoItem;
