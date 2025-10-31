# 📋 Task Tracker

[![Netlify Status](https://api.netlify.com/api/v1/badges/6847ef56-8808-4682-81e3-bd3d28ee2e51/deploy-status)](https://agusu-task-tracker.netlify.app/)

A modern task management application built with React, Material-UI, and TailwindCSS. Designed with frontend development best practices and an intuitive user interface.

## 🚀 [Live Demo](https://agusu-task-tracker.netlify.app/)

---

## ✨ Features

- ✅ **Create, edit, and delete tasks** with an intuitive interface
- 📊 **Real-time metrics** showing your task progress
- 🎨 **Responsive design** that works on mobile and desktop devices
- ⚡ **Fast and modern interface** built with React
- 🎯 **Task states** (Planned, In Progress, Completed)
- 📈 **Time estimation** for each task
- 🎭 **Mock API** with MirageJS for development

## 🛠️ Tech Stack

### Frontend
- **React 17.0.2** - UI Library
- **Material-UI v5** - Design system and components
- **TailwindCSS 3** - Utility-first CSS framework
- **Emotion** - CSS-in-JS for dynamic styling

### Development
- **Create React App** - Configuration and build tools
- **MirageJS** - Mock server for development
- **Cypress** - End-to-end testing
- **ESLint** - Code quality and linting

### Deployment
- **Netlify** - Hosting and automatic CI/CD

## 🏗️ Architecture

```
task-tracker/
├── src/
│   ├── components/          # React components
│   │   ├── AddTask.jsx      # Form to add tasks
│   │   ├── Task.jsx         # Individual task component
│   │   ├── TaskList.jsx     # Task list
│   │   └── TaskMetrics.jsx  # Metrics dashboard
│   ├── services/            # Services and business logic
│   │   └── TaskService.jsx  # API service for CRUD operations
│   ├── server.js            # Mock server (MirageJS)
│   └── App.js               # Main component
├── cypress/                 # E2E tests
├── public/                  # Static assets
└── netlify.toml            # Deployment configuration
```

## 🚀 Installation and Usage

### Prerequisites
- Node.js >= 14.0.0
- npm >= 7.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/agusu/task-tracker.git

# Navigate to directory
cd task-tracker

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`

### Available Scripts

```bash
npm start       # Starts the development server
npm run build   # Creates production build
npm test        # Runs tests with Cypress
```

## 📝 Main Features

### Task Management
Each task includes:
- **Name**: Descriptive task title
- **Description**: Additional details
- **State**: Planned, In Progress, or Completed
- **Estimate**: Estimated time in hours

### Metrics
The dashboard displays:
- Total tasks
- Planned tasks
- Tasks in progress
- Completed tasks
- Progress percentage






