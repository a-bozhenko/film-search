import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { Button } from '@material-ui/core';
import { apiGetFilmByIdOrTitle, apiGetFilmBySearch } from '../../api';
import { TextField } from '../../components';

SearchFilmsDash.propTypes = {};

function SearchFilmsDash(props) {
  const classes = styles();
  const [query, setQuery] = useState('');
  const [filmsArr, setFilmsArr] = useState([]);
  const [totalResults, setTotalResults] = useState(10);
  const [error, setError] = useState('');

  const getById = () => {
    apiGetFilmByIdOrTitle({
      id: 'tt6320628',
    });
  };

  const getByQuery = () => {
    apiGetFilmBySearch({
      query: query,
    })
      .then((response) => {
        setFilmsArr(response.Search);
        setTotalResults(response.totalResults);
      })
      .catch((error) => {
        console.log('error', error, error.response);
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.buttonsWrapper}>
        <Button variant="contained" onClick={getById}>
          test api by id
        </Button>
        <TextField
          label={'Search'}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button variant="contained" onClick={getByQuery}>
          test api by search phrase
        </Button>
      </div>

      <div className={classes.filmsWrapper}>
        {!!filmsArr.length &&
          filmsArr.map((film) => (
            <div key={film.imdbID}>
              <p>{film.Title}</p>
              <p>{film.Type}</p>
              <p>{film.Year}</p>
              <div>
                <img src={film.Poster} alt={film.Title} />
              </div>
            </div>
          ))}
      </div>

      <div>{`${filmsArr.length} of ${totalResults}`}</div>
    </div>
  );
}

export default SearchFilmsDash;
