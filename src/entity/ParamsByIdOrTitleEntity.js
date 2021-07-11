import { MOVIE_TYPE, DATA_TYPE, PLOT_TYPE } from '../helpers';

/**
 * @param {string} id
 * @param {string} title
 * @param {string} type
 * @param {number} year
 * @param {string} plot
 * @param {string} dataType
 */
export default class ParamsByIdOrTitleEntity {
  constructor(props) {
    this.i = props.id || null; // A valid IMDb ID (e.g. tt1285016)
    this.t = props.title || null; // Movie title to search for.
    this.type = props.type || MOVIE_TYPE.MOVIE; // Type of result to return.
    this.y = props.year || null; // Year of release.
    this.plot = props.plot || PLOT_TYPE.SHORT; // Return short or full plot.
    this.r = props.dataType || DATA_TYPE.JSON; // The data type to return.
  }
}
