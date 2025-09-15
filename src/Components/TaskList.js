import { useState, useEffect } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ActivitiesModal from "./ActivitiesModal";

const TaskList = ({ tasks, onEditTask, onAddTask, onDeleteTask }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showActivitiesModal, setShowActivitiesModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Pagination calculations
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
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
        <div>
          <p>Records:{tasks.length}</p>
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
            {currentTasks.length > 0 ? (
              currentTasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{indexOfFirstTask + index + 1}</td>
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
              <tr>
                <td colSpan="7" className="no-record-container">
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ◀ Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next ▶
            </button>
          </div>
        )}
        {/* <div className="page-info">
          Page {currentPage} of {totalPages}
        </div> */}
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
