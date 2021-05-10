import React, {useState} from 'react';

const Filter = () => {
    const [filter, setFilter] = useState('');
    const onChange = e => setFilter(e.target.value);
    return (
        <div className="filter">
            <input type="text" value={filter} placeholder="Filter Contacts" onChange={onChange} />
            <button>Filter</button>
        </div>
    )
}

export default Filter;
