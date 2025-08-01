// employee & admin data with tasks

const employees = [
    {
      id: 1,
      name: "John Doe",
      email: "emp1@company.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Design Login Page",
          description: "Create a responsive login page with Tailwind CSS.",
          date: "2025-08-01",
          category: "design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Bug Fixing",
          description: "Fix navbar collapse bug on small screens.",
          date: "2025-07-25",
          category: "development"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "SEO Optimization",
          description: "Improve SEO score for landing page.",
          date: "2025-07-20",
          category: "marketing"
        }
      ]
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "emp2@company.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "API Integration",
          description: "Integrate payment API in checkout page.",
          date: "2025-08-02",
          category: "development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Wireframe UX",
          description: "Build wireframes for admin panel.",
          date: "2025-07-22",
          category: "design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Research Trends",
          description: "Research current UI design trends.",
          date: "2025-07-21",
          category: "research"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Testing Login Flow",
          description: "Test login & signup with invalid inputs.",
          date: "2025-07-20",
          category: "testing"
        }
      ]
    },
    {
      id: 3,
      name: "Jim Beam",
      email: "emp3@company.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Email Campaign",
          description: "Draft email campaign for new feature launch.",
          date: "2025-08-03",
          category: "marketing"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title: "Survey Analysis",
          description: "Analyze feedback survey data from users.",
          date: "2025-08-01",
          category: "research"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Test Contact Form",
          description: "Ensure validation works correctly.",
          date: "2025-07-26",
          category: "testing"
        }
      ]
    },
    {
      id: 4,
      name: "Ali Raza",
      email: "emp4@company.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Fix Footer Layout",
          description: "Adjust the footer for better mobile display.",
          date: "2025-08-04",
          category: "design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Unit Testing",
          description: "Write tests for auth module.",
          date: "2025-07-28",
          category: "testing"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Old Feature Cleanup",
          description: "Remove deprecated code.",
          date: "2025-07-22",
          category: "development"
        }
      ]
    },
    {
      id: 5,
      name: "Sara Khan",
      email: "emp5@company.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Keyword Research",
          description: "Identify high-volume keywords for blog SEO.",
          date: "2025-08-01",
          category: "marketing"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title: "Design Landing Page",
          description: "Sketch layout for new landing page.",
          date: "2025-08-02",
          category: "design"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Debug Search Filter",
          description: "Fix bugs in product filter.",
          date: "2025-07-20",
          category: "development"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      name: "Khadim Ali",
      email: "admin@company.com",
      password: "123"
    }
  ];
  
  export { employees, admin };
  