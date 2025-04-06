import s from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchContainer}>
      <label htmlFor="filter" className={s.label}>Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={value}
        onChange={onChange}
        className={s.input}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;