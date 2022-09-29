import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import { format } from 'date-fns';

function TodoItem({ todo }){
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (todo.status === 'Done') {
          setChecked(true);
        } else {
          setChecked(false);
        }
      }, [todo.status]);



    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleCheck = () => {
        setChecked(!checked);
        dispatch(
          updateTodo({ ...todo, status: checked ? 'Pending' : 'Done' })
        );
      };


  return (
    <div className="todoBox">
        <input className="cbox" type="checkbox" checked={checked} onChange={handleCheck}/>
        <div className="title">
            {todo.title}    
        </div>
        <div className="status">
            {todo.status}
        </div>
        <p>
            {format(new Date(todo.time), 'p, MM/dd/yyyy')}
        </p>
        <input className="deletebtn" type="button" value="X" onClick={handleDelete}></input>
    </div>
  )
}

export default TodoItem