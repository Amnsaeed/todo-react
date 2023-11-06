import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Tasks from './Tasks';

const TaskList = () => {

  const { tasks } = useContext(GlobalContext);

  return (
    <div>
        <h3>Task(s) List</h3>

        <ul className='lists'>

          {tasks.map(task => (
              
             <Tasks  task={ task } key={task.id} />

          ))}


        </ul>

    </div>
  )
}

export default TaskList
