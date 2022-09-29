import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';


const InputTodo = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(title === ''){
            alert("Enter Todo Name please");
            return;
        }

        dispatch(
            addTodo({
                id:uuid(),
                title,
                status,
                time: new Date().toLocaleString(),
            })
        );

        setTitle('');
        setStatus('Pending');
    }
  return (
    <div className="inputField">
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Input Todo name"></input>

            <select id="type" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
            </select>

            <button type="submit">ADD</button>
        </form>
    </div>
  )
}

export default InputTodo