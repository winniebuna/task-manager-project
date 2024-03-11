import { SlTrash } from "react-icons/sl";

const LineItem = ({ task, handleDelete, handleToggleComplete }) => {
  return (
    <li className="task">
      <label
        className="container"
        style={
          task.completed
            ? { textDecoration: "line-through", color: "#696866" }
            : null
        }
        onDoubleClick={() => handleToggleComplete(task.id)}
      >
        {task.task}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggleComplete(task.id)}
        />
        <span className="checkmark"></span>
      </label>
      <SlTrash
        onClick={() => handleDelete(task.id)}
        role="button"
        tabIndex="0"
        aria-label={`Dekete ${task.task}`}
      />
    </li>
  );
};

export default LineItem;
