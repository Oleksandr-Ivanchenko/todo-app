import { useContext } from 'react';
// import { useTasks } from '../../hooks/useTasks';
import type { Task } from '../../types/Task';
import TaskContext from '../../context/TaskContext';
import './TaskItem.scss';

export default function TaskItem({ task }: { task: Task }) {
  // const { tasks, setTasks } = useTasks();

  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('TaskItem must be used within a TaskContext.Provider');
  }

  return (
    <li 
      key={task.id} 
      className={task.completed ? 'completed' : ''}
      onClick={() => {
          context.setTasks(prev => prev.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
      }}
    >
      {task.text} 
      <button className='delete-button' onClick={(e) => {
        e.stopPropagation();
          task.id && context.setTasks(prev => prev.filter(t => t.id !== task.id));
        }}>Delete Task
      </button>
    </li>
  )
}
