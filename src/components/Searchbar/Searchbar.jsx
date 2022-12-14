import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  HesderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled.js';
import PropTypes from 'prop-types';

export const Searchbar = ({ submitForm }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    submitForm(input);
    setInput('');
  };

  const saveInputState = e => {
    setInput(e.target.value);
  };

  return (
    <HesderSearchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          onChange={saveInputState}
          name="name"
          type="text"
          autocomplete="off"
          placeholder="Search"
          value={input}
        />
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <BiSearchAlt2 />
        </SearchFormButton>
      </SearchForm>
    </HesderSearchbar>
  );
};

Searchbar.propTypes = {
  submitForm: PropTypes.func,
};
