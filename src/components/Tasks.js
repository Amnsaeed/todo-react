import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const Tasks = ( { task } ) => {

  const { deleteTasks } = useContext(GlobalContext);


  return (
    <>
        
          <li>{task.text} <span>{task.date}</span>
          <button className='delete-btn'
          onClick={() => deleteTasks(task.id)}
          >x</button>
          </li>
         

      
    </>
  )
}

export default Tasks
