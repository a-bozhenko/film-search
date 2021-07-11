import { MOVIE_TYPE, DATA_TYPE } from '../helpers';

/**
 * @param {string} query
 * @param {string} type
 * @param {number} year
 * @param {string} dataType
 * @param {number} page
 */
export default class ParamsSearchEntity {
  constructor(props) {
    this.s = props.query || ''; // Movie title to search for.
    this.type = props.type || MOVIE_TYPE.MOVIE; // Type of result to return.
    this.y = props.year || null; // Year of release.
    this.r = props.dataType || DATA_TYPE.JSON; // The data type to return.
    this.page = props.page || 1; // Page number to return.
  }
}
