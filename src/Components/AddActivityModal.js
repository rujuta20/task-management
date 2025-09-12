// import { useState } from "react";
// const AddActivityModal = ({ isOpen, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     date: "",
//     department: "",
//   });

//   const handleSubmit = (saveAndNext = false) => {
//     if (formData.name && formData.date && formData.department) {
//       onSave({
//         id: Date.now(),
//         ...formData,
//       });

//       if (saveAndNext) {
//         setFormData({ name: "", date: "", department: "" });
//       } else {
//         onClose();
//         setFormData({ name: "", date: "", department: "" });
//       }
//     }
//   };

//   const handleCancel = () => {
//     setFormData({ name: "", date: "", department: "" });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content add-activity-modal">
//         <div className="modal-header">
//           <h2>Add Activity</h2>
//           <button className="close-btn" onClick={handleCancel}>
//             ×
//           </button>
//         </div>
//         <div className="modal-body">
//           <div className="form-group">
//             <label>Activity Name</label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Date</label>
//             <input
//               type="date"
//               value={formData.date}
//               onChange={(e) =>
//                 setFormData({ ...formData, date: e.target.value })
//               }
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Department</label>
//             <input
//               type="text"
//               value={formData.department}
//               onChange={(e) =>
//                 setFormData({ ...formData, department: e.target.value })
//               }
//               className="form-control"
//             />
//           </div>
//         </div>
//         <div className="modal-footer">
//           <button className="btn btn-cancel" onClick={handleCancel}>
//             Cancel
//           </button>
//           <button className="btn btn-save" onClick={() => handleSubmit(false)}>
//             Save
//           </button>
//           <button
//             className="btn btn-save-next"
//             onClick={() => handleSubmit(true)}
//           >
//             Save & Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AddActivityModal;

import { useState } from "react";
const AddActivityModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    department: "",
  });

  const handleSubmit = (saveAndNext = false) => {
    if (formData.name && formData.date && formData.department) {
      onSave({
        id: Date.now(),
        ...formData,
      });

      if (saveAndNext) {
        setFormData({ name: "", date: "", department: "" });
      } else {
        onClose();
        setFormData({ name: "", date: "", department: "" });
      }
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", date: "", department: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content add-activity-modal">
        <div className="modal-header">
          <h2>Add Activity</h2>
          <button className="close-btn" onClick={handleCancel}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Activity Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              className="form-control"
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-save" onClick={() => handleSubmit(false)}>
            Save
          </button>
          <button
            className="btn btn-save-next"
            onClick={() => handleSubmit(true)}
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddActivityModal;
