import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTasks = () => {


  
  const [ text, setText ] = useState('');
  const [ date, setDate ] = useState('');
  const { addTasks } = useContext(GlobalContext);

  const onSubmit = ( e ) => {

    e.preventDefault();
    

    const newTasks = {

        id: Math.floor(Math.random() * 1000000),
        text,
        date


    }

    addTasks(newTasks);

  }

  return (
    <div>

        <h3>Add Task(s)</h3>

    <form onSubmit={onSubmit}
    className='form-container'>

          <input 
          placeholder='Enter a Task...'
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
          <input type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}

          />

          <button className='btn'>Add</button>
      
    </form>

    </div>
  )
}

export default AddTasks
