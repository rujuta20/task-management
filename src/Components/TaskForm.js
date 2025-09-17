import { useState, useEffect } from "react";
import AddActivityModal from "./AddActivityModal";

const TaskForm = ({ task, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    priority: "High",
    assignee: "",
    activities: [],
  });
  const [showAddActivity, setShowAddActivity] = useState(false);
  const [currentEditingActivity, setCurrentEditingActivity] = useState(null); // New state

  useEffect(() => {
    if (task) {
      setFormData({ ...task });
    } else {
      setFormData({
        name: "",
        description: "",
        priority: "High",
        assignee: "",
        activities: [],
      });
    }
  }, [task]);

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.description &&
      formData.assignee &&
      formData.activities.length >= 1
    ) {
      onSave(formData);
    } else {
      alert("Please fill all fields and add at least one activity.");
    }
  };

  const handleDeleteActivity = (activityId) => {
    setFormData({
      ...formData,
      activities: formData.activities.filter((a) => a.id !== activityId),
    });
  };

  // Open modal for add
  const openAddActivityModal = () => {
    setCurrentEditingActivity(null); // Clear edit mode
    setShowAddActivity(true);
  };

  // Open modal for edit
  const handleEditActivity = (activity) => {
    setCurrentEditingActivity(activity); // Set activity to edit
    setShowAddActivity(true);
  };

  const handleSaveActivity = (activity) => {
    if (currentEditingActivity) {
      setFormData((prev) => ({
        ...prev,
        activities: prev.activities.map((a) =>
          a.id === activity.id ? activity : a
        ),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        activities: [...prev.activities, activity],
      }));
    }

    setCurrentEditingActivity(null);
    setShowAddActivity(false);
  };

  const handleCloseActivityModal = () => {
    setCurrentEditingActivity(null);
    setShowAddActivity(false);
  };

  return (
    <div className="task-form-container">
      <div className="task-form">
        <h1>{task ? "Update Task" : "Add Task"}</h1>

        <div className="form-row">
          <div className="form-group half-width">
            <label>Task Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="form-control"
            />
          </div>

          <div className="form-group half-width">
            <label>Employee Name</label>
            <input
              type="text"
              value={formData.assignee}
              onChange={(e) =>
                setFormData({ ...formData, assignee: e.target.value })
              }
              className="form-control"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group half-width">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="form-control textarea"
            />
          </div>

          <div className="form-group half-width">
            <label>Priority</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="priority"
                  value="High"
                  checked={formData.priority === "High"}
                  onChange={(e) =>
                    setFormData({ ...formData, priority: e.target.value })
                  }
                />
                High
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="priority"
                  value="Medium"
                  checked={formData.priority === "Medium"}
                  onChange={(e) =>
                    setFormData({ ...formData, priority: e.target.value })
                  }
                />
                Medium
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="priority"
                  value="Low"
                  checked={formData.priority === "Low"}
                  onChange={(e) =>
                    setFormData({ ...formData, priority: e.target.value })
                  }
                />
                Low
              </label>
            </div>
          </div>
        </div>

        <div className="activities-section">
          <div className="section-header">
            <h2>Activities</h2>
            {/* <h2>{activityToEdit ? "Update Activity" : "Add Activity"}</h2> */}

            <button className="btn btn-primary" onClick={openAddActivityModal}>
              + Add Activity
            </button>
          </div>

          <table className="activities-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Date</th>
                <th>Activity Name</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData.activities.length > 0 ? (
                formData.activities.map((activity, index) => (
                  <tr key={activity.id}>
                    <td>{index + 1}</td>
                    <td>{activity.date}</td>
                    <td>{activity.name}</td>
                    <td>{activity.department}</td>
                    <td>
                      <>
                        <button
                          className="icon-btn edit-btn"
                          onClick={() => handleEditActivity(activity)}
                        >
                          ✏️
                        </button>
                        <button
                          className="icon-btn delete-btn"
                          onClick={() => handleDeleteActivity(activity.id)}
                        >
                          🗑️
                        </button>
                      </>
                    </td>
                  </tr>
                ))
              ) : (
                <div>No Record Found</div>
              )}
            </tbody>
          </table>
        </div>
        <div className="form-row">
          <button className="btn btn-primary" onClick={handleSubmit}>
            {task ? "Update Task" : "Add Task"}
          </button>
          <button className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>

      <AddActivityModal
        isOpen={showAddActivity}
        onClose={handleCloseActivityModal}
        onSave={handleSaveActivity}
        activityToEdit={currentEditingActivity}
      />
    </div>
  );
};
export default TaskForm;
