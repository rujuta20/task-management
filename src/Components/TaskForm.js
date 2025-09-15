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
  const [editingActivityId, setEditingActivityId] = useState(null);
  const [editedActivity, setEditedActivity] = useState(null);

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
      formData.activities.length == 1
    ) {
      onSave(formData);
    }
  };

  const handleAddActivity = (activity) => {
    setFormData({
      ...formData,
      activities: [...formData.activities, activity],
    });
  };

  const handleDeleteActivity = (activityId) => {
    setFormData({
      ...formData,
      activities: formData.activities.filter((a) => a.id !== activityId),
    });
  };

  const handleEditActivity = (activity) => {
    setEditingActivityId(activity.id);
    setEditedActivity({ ...activity });
  };

  const handleSaveActivity = () => {
    setFormData({
      ...formData,
      activities: formData.activities.map((act) =>
        act.id === editedActivity.id ? editedActivity : act
      ),
    });
    setEditingActivityId(null);
    setEditedActivity(null);
  };

  const handleCancelEdit = () => {
    setEditingActivityId(null);
    setEditedActivity(null);
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
            <button
              className="btn btn-primary"
              onClick={() => setShowAddActivity(true)}
            >
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
                    <td>
                      {editingActivityId === activity.id ? (
                        <input
                          type="date"
                          value={editedActivity.date}
                          onChange={(e) =>
                            setEditedActivity({
                              ...editedActivity,
                              date: e.target.value,
                            })
                          }
                          className="form-control"
                        />
                      ) : (
                        activity.date
                      )}
                    </td>
                    <td>
                      {editingActivityId === activity.id ? (
                        <input
                          type="text"
                          value={editedActivity.name}
                          onChange={(e) =>
                            setEditedActivity({
                              ...editedActivity,
                              name: e.target.value,
                            })
                          }
                          className="form-control"
                        />
                      ) : (
                        activity.name
                      )}
                    </td>
                    <td>
                      {editingActivityId === activity.id ? (
                        <input
                          type="text"
                          value={editedActivity.department}
                          onChange={(e) =>
                            setEditedActivity({
                              ...editedActivity,
                              department: e.target.value,
                            })
                          }
                          className="form-control"
                        />
                      ) : (
                        activity.department
                      )}
                    </td>
                    <td>
                      {editingActivityId === activity.id ? (
                        <>
                          <button
                            className="icon-btn save-btn"
                            onClick={handleSaveActivity}
                          >
                            💾
                          </button>
                          <button
                            className="icon-btn cancel-btn"
                            onClick={handleCancelEdit}
                          >
                            ❌
                          </button>
                        </>
                      ) : (
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
                      )}
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
        onClose={() => setShowAddActivity(false)}
        onSave={handleAddActivity}
      />
    </div>
  );
};
export default TaskForm;
