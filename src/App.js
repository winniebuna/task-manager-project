import AddTask from "./AddTask.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { useState } from "react";
import SearchTask from "./SearchTask.jsx";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasklist"))
  );

  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("tasklist", JSON.stringify(newTasks));
  };

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTasks = { id, task, completed: false };
    const updatedTasks = [...tasks, myNewTasks];
    setAndSaveTasks(updatedTasks);
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setAndSaveTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setAndSaveTasks(updatedTasks);
  };

  const calculateProgress = () => {
    const completedCount = tasks.filter((task) => task.completed).length;
    const totalCount = tasks.length;
    return Math.round(
      totalCount === 0 ? 0 : (completedCount / totalCount) * 100
    );
  };
  const progress = calculateProgress();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="App">
      <Header />
      <SearchTask search={search} setSearch={setSearch} />
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <Content
        tasks={tasks.filter((task) =>
          task.task.toLowerCase().includes(search.toLowerCase())
        )}
        handleToggleComplete={handleToggleComplete}
        handleDelete={handleDelete}
        calculateProgress={calculateProgress}
        progress={progress}
      />
      <Footer length={tasks.length} />
    </div>
  );
}

export default App;
