import { useState } from "react";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import api from "./Services/api";
import "./styles.css";

const App = () => {
  const [currentView, setCurrentView] = useState("list");
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState(api);

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setCurrentView("form");
  };

  const handleAddTask = () => {
    setSelectedTask(null);
    setCurrentView("form");
  };

  const handleSaveTask = (taskData) => {
    if (taskData.id) {
      // Update existing task
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskData.id ? taskData : task))
      );
    } else {
      // Add new task
      const newTask = {
        ...taskData,
        id: Math.max(0, ...tasks.map((t) => t.id)) + 1,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    setCurrentView("list");
    setSelectedTask(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleCancel = () => {
    setCurrentView("list");
    setSelectedTask(null);
  };

  return (
    <div className="app">
      {/* <style></style> */}

      {currentView === "list" ? (
        <TaskList
          tasks={tasks}
          onEditTask={handleEditTask}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
      ) : (
        <TaskForm
          task={selectedTask}
          onSave={handleSaveTask}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default App;
