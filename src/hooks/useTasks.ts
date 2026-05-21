import { useEffect, useState } from "react";
import type { Task } from '../types/Task';

export const useTasks = () => {

    const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
    useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); 
 

  const [inputValue, setInputValue] = useState('');     
  return { tasks, setTasks, inputValue, setInputValue };
}