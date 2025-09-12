// const ActivitiesModal = ({ isOpen, onClose, activities = [] }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content activities-modal">
//         <div className="modal-header">
//           <h2>Activities</h2>
//           <button className="close-btn" onClick={onClose}>
//             ×
//           </button>
//         </div>
//         <div className="modal-body">
//           <table className="activities-table">
//             <thead>
//               <tr>
//                 <th>S.No.</th>
//                 <th>Activity Name</th>
//                 <th>Department</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {activities.map((activity, index) => (
//                 <tr key={activity.id}>
//                   <td>{index + 1}</td>
//                   <td>{activity.name}</td>
//                   <td>{activity.department}</td>
//                   <td>{activity.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Delete Confirmation Modal Component
// const DeleteConfirmModal = ({ isOpen, onClose, onConfirm }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content delete-modal">
//         <div className="modal-body">
//           <p>Do you want to delete the Task?</p>
//         </div>
//         <div className="modal-footer">
//           <button className="btn btn-cancel" onClick={onClose}>
//             Cancel
//           </button>
//           <button className="btn btn-delete" onClick={onConfirm}>
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivitiesModal;

const ActivitiesModal = ({ isOpen, onClose, activities = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content activities-modal">
        <div className="modal-header">
          <h2>Activities</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <table className="activities-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Activity Name</th>
                <th>Department</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={activity.id}>
                  <td>{index + 1}</td>
                  <td>{activity.name}</td>
                  <td>{activity.department}</td>
                  <td>{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ActivitiesModal;
