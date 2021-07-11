import { REQUEST_TYPES, replaceUrlPlaceholder, replaceUrlPlaceholders, getRequestConfig } from './config';
import { ENDPOINTS } from './endpoints';
import { apiGetFilmByIdOrTitle, apiGetFilmBySearch } from './search';

export {
  //endpoints
  ENDPOINTS,
  //config
  REQUEST_TYPES,
  replaceUrlPlaceholder,
  replaceUrlPlaceholders,
  getRequestConfig,
  // api
  apiGetFilmByIdOrTitle,
  apiGetFilmBySearch,
};
