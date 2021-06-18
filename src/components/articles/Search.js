import React, { useState, useContext } from 'react';
import NytimesContext from '../../context/nytimes/nytimesContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const nytimesContext = useContext(NytimesContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter either 1, 7, 30', 'light');
    } else {
      nytimesContext.searchArticles(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          name="text"
          type="number"
          placeholder="Search Period..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {nytimesContext.articles.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={nytimesContext.clearArticles}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
