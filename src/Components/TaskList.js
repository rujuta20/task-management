// import { useState, useEffect } from "react";
// import DeleteConfirmModal from "./DeleteConfirmModal";
// import ActivitiesModal from "./ActivitiesModal";
// import api from "../Services/api";

// const TaskList = ({ onEditTask, onAddTask }) => {
//   const [tasks, setTasks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showActivitiesModal, setShowActivitiesModal] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [selectedActivities, setSelectedActivities] = useState([]);

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   const loadTasks = async () => {
//     const taskData = await api.getTasks();
//     setTasks(taskData);
//   };

//   const handleDelete = async () => {
//     if (selectedTask) {
//       await api.deleteTask(selectedTask.id);
//       await loadTasks();
//       setShowDeleteModal(false);
//       setSelectedTask(null);
//     }
//   };

//   const handleViewActivities = (task) => {
//     setSelectedActivities(task.activities);
//     setShowActivitiesModal(true);
//   };

//   const filteredTasks = tasks.filter(
//     (task) =>
//       task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       task.assignee.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="task-list-container">
//       <div className="task-list">
//         <div className="header">
//           <h1>Task List</h1>
//           <button className="btn btn-primary" onClick={onAddTask}>
//             + Add Task
//           </button>
//         </div>

//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         <table className="task-table">
//           <thead>
//             <tr>
//               <th>S.No.</th>
//               <th>Task Name</th>
//               <th>Description</th>
//               <th>Priority</th>
//               <th>Assignee</th>
//               <th>Activity</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTasks.map((task, index) => (
//               <tr key={task.id}>
//                 <td>{index + 1}</td>
//                 <td>{task.name}</td>
//                 <td>{task.description}</td>
//                 <td>
//                   <span className={`priority ${task.priority.toLowerCase()}`}>
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td>{task.assignee}</td>
//                 <td>
//                   <button
//                     className="btn btn-view"
//                     onClick={() => handleViewActivities(task)}
//                   >
//                     View
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     className="icon-btn edit-btn"
//                     onClick={() => onEditTask(task)}
//                   >
//                     ✏️
//                   </button>
//                   <button
//                     className="icon-btn delete-btn"
//                     onClick={() => {
//                       setSelectedTask(task);
//                       setShowDeleteModal(true);
//                     }}
//                   >
//                     🗑️
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <DeleteConfirmModal
//         isOpen={showDeleteModal}
//         onClose={() => setShowDeleteModal(false)}
//         onConfirm={handleDelete}
//       />

//       <ActivitiesModal
//         isOpen={showActivitiesModal}
//         onClose={() => setShowActivitiesModal(false)}
//         activities={selectedActivities}
//       />
//     </div>
//   );
// };
// export default TaskList;

import { useState, useEffect } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ActivitiesModal from "./ActivitiesModal";

const TaskList = ({ tasks, onEditTask, onAddTask, onDeleteTask }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showActivitiesModal, setShowActivitiesModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleDelete = () => {
    if (selectedTask) {
      onDeleteTask(selectedTask.id);
      setShowDeleteModal(false);
      setSelectedTask(null);
    }
  };

  const handleViewActivities = (task) => {
    setSelectedActivities(task.activities);
    setShowActivitiesModal(true);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="task-list-container">
      <div className="task-list">
        <div className="header">
          <h1>Task List</h1>
          <button className="btn btn-primary" onClick={onAddTask}>
            + Add Task
          </button>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <table className="task-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Assignee</th>
              <th>Activity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                  <td>
                    <span className={`priority ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td>{task.assignee}</td>
                  <td>
                    <button
                      className="btn btn-view"
                      onClick={() => handleViewActivities(task)}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      className="icon-btn edit-btn"
                      onClick={() => onEditTask(task)}
                    >
                      ✏️
                    </button>
                    <button
                      className="icon-btn delete-btn"
                      onClick={() => {
                        setSelectedTask(task);
                        setShowDeleteModal(true);
                      }}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <div className="no-record-container">No Record Found</div>
            )}
          </tbody>
        </table>
      </div>

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />

      <ActivitiesModal
        isOpen={showActivitiesModal}
        onClose={() => setShowActivitiesModal(false)}
        activities={selectedActivities}
      />
    </div>
  );
};
export default TaskList;
