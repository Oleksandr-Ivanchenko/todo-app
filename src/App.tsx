
import { useCallback, useState, useMemo, useRef } from 'react';
import './App.scss'
import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'
import TaskContext from './context/TaskContext'
import type { Task } from './types/Task';
import { useEffect } from 'react';


function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
  const saved = localStorage.getItem('tasks');
  const inputRef = useRef<HTMLInputElement>(null);

 

  return saved ? JSON.parse(saved) : [];
});

   const focusInput = () => {
    inputRef.current?.focus();
  };

  const addTask = useCallback(((text: string) => {
    setTasks(prev => [...prev, { id: Date.now(), text, completed: false }]);
  }), []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const contextValue = useMemo(() => ({ tasks, setTasks }), [tasks]);
  

  return (
      <div className="App">
        <h1>Todo List</h1>
          <TaskContext.Provider value={contextValue} onClick={focusInput}>
            <AddTask addTask={addTask}  />
            <TaskList />
          </TaskContext.Provider>
      </div>
  )
}

export default App
