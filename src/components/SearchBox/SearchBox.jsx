import { useState } from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ contacts, onFilteredContactsChange }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
    
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    
    onFilteredContactsChange(filteredContacts);
  };

  return (
    <div className={s.searchContainer}>
      <label htmlFor="filter" className={s.label}>Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;