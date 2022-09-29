import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../slices/todoSlice';

const AppHeader = () => {
    const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
    const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
    const dispatch = useDispatch();

    const updateFilter = (e) => {
        setFilterStatus(e.target.value);
        dispatch(updateFilterStatus(e.target.value));
    };

  return (
    <div className="filterOption">
    <select
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>
      </div>
  )
}

export default AppHeader