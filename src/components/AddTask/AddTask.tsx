

// import { useTasks } from '../../hooks/useTasks';
import { useContext, useState, useRef } from 'react';
import TaskContext from '../../context/TaskContext';
import './AddTask.scss';



export default function AddTask( ) {
  // const {  setTasks, inputValue, setInputValue } ();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const context = useContext(TaskContext);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };

  if (!context) {
    throw new Error('AddTask must be used within a TaskContext.Provider');
  }

  const { setTasks } = context;

  return (
    <div className='add-task'>
      <input 
        type="text" 
        placeholder="Enter task..." 
        value={inputValue} 
        onFocus={focusInput}
        onChange={e => setInputValue(e.target.value)} 
        ref={inputRef}
      />
      <button
        className='add-button'
        type='button' 
          onClick={() => {
          if (!inputValue.trim()) return;
            setTasks(prev => [...prev, { id: Date.now(), text: inputValue, completed: false }]);
          
        //   // Проверяем, что введенный текст не пустой (после удаления пробелов)
        //   if (inputValue.trim() !== '') {
        //     // cоздаем новый массив все задачи и новая задача, которая добавляется в конец массива
        //     // Новый объект задачи содержит уникальный id (используем Date.now() для генерации), текст задачи и флаг completed, который по умолчанию установлен в false
        //     // Очищаем поле ввода после добавления задачи
        //     setInputValue('');
        //   }
        setInputValue('');
        }}
        >Add Task
      </button>
    </div>
  )
}
