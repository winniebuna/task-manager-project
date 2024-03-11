import ProgressBar from "./ProgressBar";
import TaskList from "./TaskList";

const Content = ({ tasks, handleDelete, handleToggleComplete, progress }) => {
  return (
    <main>
      <ProgressBar progress={progress} />
      <p className="task-list-label"> Task List</p>

      {tasks.length ? (
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
        />
      ) : (
        <p style={{ margin: "2rem" }}> You have no tasks to show 😊</p>
      )}
    </main>
  );
};

export default Content;
