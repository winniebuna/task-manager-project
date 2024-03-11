import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddTask = ({ newTask, setNewTask, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form action="" className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="addTask">Add Task</label>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        id="addTask"
        placeholder="Add Task"
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Task"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddTask;
