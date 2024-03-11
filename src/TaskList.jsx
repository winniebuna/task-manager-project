import LineItem from "./LineItem";

const TaskList = ({ tasks, handleDelete, handleToggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <LineItem
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
