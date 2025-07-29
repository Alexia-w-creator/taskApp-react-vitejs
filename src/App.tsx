import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.tsx";
import TaskDetails from "./components/TaskDetails.tsx";
import React from "react";
import { TaskContext } from "./context/taskContext";
import type { TaskContextType, ITask } from "/src/@customTypes/task";

function App() {
  const { tasks } = React.useContext(TaskContext) as TaskContextType;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          {tasks.map((task_: ITask) => (
            <Route
              path={"/task/" + task_.id}
              element={<TaskDetails task={task_} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
