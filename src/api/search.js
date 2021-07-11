import axios from 'axios';
import { ENDPOINTS, getRequestConfig, REQUEST_TYPES } from './index';
import { makeParams } from './config';
import ParamsByIdOrTitleEntity from '../entity/ParamsByIdOrTitleEntity';
import ParamsSearchEntity from '../entity/ParamsBySearchEntity';

/**
 * By ID or Title
 * Please note while both "i" and "t" are optional at least one argument is required.
 * @param params
 * @param {string} params.id -
 * @param {string} params.title -
 * @param {string} params.type -
 * @param {number} params.year -
 * @param {string} params.plot -
 * @param {string} params.dataType -
 * @param onSuccess
 * @param onError
 * @returns {Promise<unknown>}
 */
export const apiGetFilmByIdOrTitle = function (params, onSuccess, onError) {
  const config = getRequestConfig(REQUEST_TYPES.GET, ENDPOINTS.FILM_SEARCH);

  config.params = makeParams(new ParamsByIdOrTitleEntity(params));

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response.data);
        onSuccess && onSuccess(response.data);
      })
      .catch((error) => {
        reject(error);
        onError && onError(error);
      });
  });
};

/**
 * By Search
 * @param params
 * @param {string} params.query
 * @param {string} params.type
 * @param {number} params.year
 * @param {string} params.dataType
 * @param {number} params.page
 * @param onSuccess
 * @param onError
 * @returns {Promise<unknown>}
 */
export const apiGetFilmBySearch = function (params, onSuccess, onError) {
  const config = getRequestConfig(REQUEST_TYPES.GET, ENDPOINTS.FILM_SEARCH);

  config.params = makeParams(new ParamsSearchEntity(params));

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response.data);
        onSuccess && onSuccess(response.data);
      })
      .catch((error) => {
        reject(error);
        onError && onError(error);
      });
  });
};
