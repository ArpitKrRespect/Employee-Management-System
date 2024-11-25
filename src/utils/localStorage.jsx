const employees = [
  {
    ID: "E001",
    name: "Arpit",  // Added name
    email: "arpit@example.com",
    password: "123456",
    taskCount: {  // Added task count
      active: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React.",
        taskDate: "2024-11-01",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Integrate authentication with backend.",
        taskDate: "2024-10-15",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Create unit tests for login component.",
        taskDate: "2024-11-05",
        category: "Testing"
      }
    ]
  },
  {
    ID: "E002",
    name: "Harshit",  // Added name
    email: "harshit@example.com",
    password: "123456",
    taskCount: {  // Added task count
      active: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Create a dashboard with user statistics.",
        taskDate: "2024-11-10",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate external API for data.",
        taskDate: "2024-10-20",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Bug in Payment Module",
        taskDescription: "Resolve payment gateway issues.",
        taskDate: "2024-11-15",
        category: "Bug Fix"
      }
    ]
  },
  {
    ID: "E003",
    name: "Sarthak",  // Added name
    email: "sarthak@example.com",
    password: "123456",
    taskCount: {  // Added task count
      active: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create User Profile",
        taskDescription: "Develop user profile functionality.",
        taskDate: "2024-11-03",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document API endpoints for users.",
        taskDate: "2024-10-25",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Performance",
        taskDescription: "Enhance the performance of the user component.",
        taskDate: "2024-11-07",
        category: "Performance"
      }
    ]
  },
  {
    ID: "E004",
    name: "Aryan",  // Added name
    email: "aryan@example.com",
    password: "123456",
    taskCount: {  // Added task count
      active: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design UI for Settings",
        taskDescription: "Create a user-friendly settings page.",
        taskDate: "2024-11-12",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Integrate Notification System",
        taskDescription: "Set up real-time notifications for users.",
        taskDate: "2024-11-01",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct User Testing",
        taskDescription: "Gather feedback from users on UI.",
        taskDate: "2024-10-30",
        category: "Testing"
      }
    ]
  },
  {
    ID: "E005",
    name: "Shivanshi",  // Added name
    email: "shivanshi@example.com",
    password: "123456",
    taskCount: {  // Added task count
      active: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Responsive Issues",
        taskDescription: "Ensure the site is responsive on all devices.",
        taskDate: "2024-11-05",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Refactor Code",
        taskDescription: "Improve code quality and readability.",
        taskDate: "2024-11-10",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy to Production",
        taskDescription: "Deploy the application to the production server.",
        taskDate: "2024-10-28",
        category: "Deployment"
      }
    ]
  }
];

const admin = {
  ID: "A001",
  email: "admin@example.com",
  password: "123456",
};

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  // return { employees, admin };
};
