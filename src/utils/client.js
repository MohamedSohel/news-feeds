import Axios from 'axios';
import * as moment from 'moment';
import {Const} from "../app/Constants";
/**
 * Created a common axios instance
 */
const axiosInstance = Axios.create({
  baseURL: Const.getUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Change date time format according to given input using momnet
 * @param date
 * @param format
 * @returns {string}
 */
const changeDateTimeFormat = (date, format) => moment(date).format(format);

export {
  axiosInstance,
  changeDateTimeFormat,
};
