
import './App.css'
import { useTasks } from './hooks/useTasks';

// // Тип описывает структуру одной задачи
// // id - уникальный идентификатор задачи
// // text - текст задачи
// // completed - флаг, указывающий, выполнена ли задача (необязательное поле)
// type Task = {
//   id: number;
//   text: string;
//   completed?: boolean;
// }

function App() {
  // // tasks - массив задач, setTasks - функция для обновления этого массива
  // // inputValue - текущее значение поля ввода, setInputValue - функция для его обновления
  // // Изначально tasks - пустой массив, inputValue - пустая строка
  // // useState - хук для управления состоянием в функциональных компонентах React
  // // Типизация useState<Task[]> указывает, что tasks будет массивом объектов типа Task
  // const [tasks, setTasks] = useState<Task[]>(
  //   // Получаем задачи из localStorage при загрузке компонента
  //   // Если в localStorage есть сохраненные задачи, парсим их и используем в качестве начального состояния
  //   // Если нет, используем пустой массив
  //   () => {
  //     const savedTasks = localStorage.getItem('tasks');
  //     return savedTasks ? JSON.parse(savedTasks) : [];
  //   }
  // );
  // const [inputValue, setInputValue] = useState('');

  // // Получаем задачи из localStorage при загрузке компонента
  // useEffect(() => {
  //   // Сохраняем задачи в localStorage при каждом изменении массива задач
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

  const { tasks, setTasks, inputValue, setInputValue } = useTasks();

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>

        {/* controller input React полностю контролирует значение поля ввода
          value - текущее значение поля ввода, которое хранится в состоянии inputValue
          onChange - обработчик события изменения поля ввода, который обновляет состояние inputValue при каждом изменении текста
          e.target.value - новое значение поля ввода, которое передается в setInputValue для обновления состояния
        */}
          <input 
            type="text" 
            placeholder="Enter task..." 
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)} 
          />
          <button
            className='add-button'
            type='submit' 
            onClick={() => {
              // Проверяем, что введенный текст не пустой (после удаления пробелов)
              if (inputValue.trim() !== '') {
                // cоздаем новый массив все задачи и новая задача, которая добавляется в конец массива
                // Новый объект задачи содержит уникальный id (используем Date.now() для генерации), текст задачи и флаг completed, который по умолчанию установлен в false
                setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
                // Очищаем поле ввода после добавления задачи
                setInputValue('');
                
              }
            }}>Add Task
          </button>
          <ul className='task-list'>
            {/* Проходим по массиву задач и отображаем каждую задачу в виде элемента списка (li)
              key - уникальный идентификатор задачи, который помогает React оптимизировать рендеринг списка
              className - устанавливает класс 'completed' для задачи, если она выполнена (task.completed === true), что позволяет применить стили для выполненных задач
              onClick - обработчик клика по задаче, который переключает состояние completed для данной задачи (если задача была выполнена, она станет невыполненной и наоборот)
              Внутри элемента списка отображается текст задачи и кнопка "Delete Task", которая позволяет удалить задачу из списка при клике на нее
            */}
            {tasks.map(task => (
              <li 
                key={task.id} 
                className={task.completed ? 'completed' : ''}
                onClick={() => {
                  setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
                }}
              >
                {task.text} 
                <button className='delete-button' onClick={(e) => {
                  e.stopPropagation();
                    setTasks(tasks.filter(t => t.id !== task.id))
                  }}>Delete Task
                </button>
              </li>
            ))}
          </ul>
      </div>
    </>
  )
}

export default App
