import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, filterContacts }) => {
  return (
    <div className={s.mainContainer}>
      <div className={s.inputContainer}>
        <label className={s.labelName} htmlFor="filter">
          Find contact by name
        </label>
        <input
          onChange={filterContacts}
          type="text"
          name="filter"
          id="filter"
          value={filter}
          className={s.inputName}
          placeholder="Filter"
        ></input>
      </div>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContacts: PropTypes.func.isRequired,
};
export default Filter;
