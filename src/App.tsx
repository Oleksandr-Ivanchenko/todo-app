
import { useState } from 'react';
import './App.css'
import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'
import TaskContext from './context/TaskContext'
import type { Task } from './types/Task';
import { useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
});
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
      <div className="App">
        <h1>Todo List</h1>
          <TaskContext.Provider value={{ tasks, setTasks }}>
            <AddTask />
            <TaskList />
          </TaskContext.Provider>
      </div>
  )
}

export default App
