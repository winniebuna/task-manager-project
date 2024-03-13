// import ProgressBar from "./ProgressBar";
import TaskList from "./TaskList";

const Content = ({ tasks, handleDelete, handleToggleComplete }) => {
  return (
    <main>
      {tasks.length ? (
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
        />
      ) : (
        <p style={{ margin: "2rem", fontSize: "10px" }}>
          {" "}
          You have no tasks to show 😊
        </p>
      )}
    </main>
  );
};

export default Content;
