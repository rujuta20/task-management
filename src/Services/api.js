// import React, { useState, useEffect } from "react";

// // Mock API service
// const api = {
//   getTasks: () => {
//     const stored = localStorage.getItem("tasks");
//     console.log(stored);
//     return Promise.resolve(
//       stored
//         ? JSON.parse(stored)
//         : [
//             {
//               id: 1,
//               name: "task3.2",
//               description: "task3 description user003",
//               priority: "Low",
//               assignee: "Alice Johnson",
//               activities: [
//                 {
//                   id: 1,
//                   name: "save1",
//                   department: "qwert",
//                   date: "2025-09-04",
//                 },
//                 {
//                   id: 2,
//                   name: "activity1.2",
//                   department: "digitally",
//                   date: "2025-01-03",
//                 },
//               ],
//             },
//             {
//               id: 2,
//               name: "task4",
//               description: "task4 description",
//               priority: "High",
//               assignee: "Bob Brown",
//               activities: [
//                 {
//                   id: 3,
//                   name: "lorem123",
//                   department: "12345",
//                   date: "2025-09-04",
//                 },
//                 {
//                   id: 4,
//                   name: "lorem123",
//                   department: "12345",
//                   date: "2025-09-04",
//                 },
//                 {
//                   id: 5,
//                   name: "lorem10",
//                   department: "qwert",
//                   date: "2025-09-04",
//                 },
//               ],
//             },
//             {
//               id: 3,
//               name: "lorem",
//               description: "qwert",
//               priority: "High",
//               assignee: "Jane Smith",
//               activities: [],
//             },
//             {
//               id: 4,
//               name: "lorem",
//               description: "lorem",
//               priority: "High",
//               assignee: "Jane Smith",
//               activities: [],
//             },
//           ]
//     );
//   },

//   saveTask: (task) => {
//     return new Promise((resolve) => {
//       const stored = localStorage.getItem("tasks");
//       const tasks = stored ? JSON.parse(stored) : [];

//       if (task.id) {
//         const index = tasks.findIndex((t) => t.id === task.id);
//         // const index = tasks.findIndex((t) => Number(t.id) === Number(task.id));

//         if (index !== -1) {
//           tasks[index] = task;
//         }
//       } else {
//         task.id = Math.max(0, ...tasks.map((t) => t.id)) + 1;
//         tasks.push(task);
//       }

//       localStorage.setItem("tasks", JSON.stringify(tasks));
//       resolve(task);
//     });
//   },

//   deleteTask: (id) => {
//     return new Promise((resolve) => {
//       const stored = localStorage.getItem("tasks");
//       const tasks = stored ? JSON.parse(stored) : [];
//       const filtered = tasks.filter((t) => t.id !== id);
//       localStorage.setItem("tasks", JSON.stringify(filtered));
//       resolve();
//     });
//   },
// };

// export default api;

import React, { useState, useEffect } from "react";

const api = [
  {
    id: 1,
    name: "task3.2",
    description: "task3 description user003",
    priority: "Low",
    assignee: "Alice Johnson",
    activities: [
      {
        id: 1,
        name: "save1",
        department: "qwert",
        date: "2025-09-04",
      },
      {
        id: 2,
        name: "activity1.2",
        department: "digitally",
        date: "2025-01-03",
      },
    ],
  },
  {
    id: 2,
    name: "task4",
    description: "task4 description",
    priority: "High",
    assignee: "Bob Brown",
    activities: [
      {
        id: 3,
        name: "lorem123",
        department: "12345",
        date: "2025-09-04",
      },
      {
        id: 4,
        name: "lorem123",
        department: "12345",
        date: "2025-09-04",
      },
      {
        id: 5,
        name: "lorem10",
        department: "qwert",
        date: "2025-09-04",
      },
    ],
  },
  {
    id: 3,
    name: "lorem",
    description: "qwert",
    priority: "High",
    assignee: "Jane Smith",
    activities: [],
  },
  {
    id: 4,
    name: "lorem",
    description: "lorem",
    priority: "High",
    assignee: "Jane Smith",
    activities: [],
  },
];
export default api;
