
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TaskItem from '../TaskItem/TaskItem';


export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  console.log(tasks, 1111);
  // const { tasks } = useTasks();
  return (
    <ul>
        {tasks.map(task => (
            <TaskItem task={task} key={task.id} />
        ))}
    </ul>
  )
}
