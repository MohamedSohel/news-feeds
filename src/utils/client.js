import Axios from 'axios';
import {VRSConst} from "../app/Constants";
/**
 * Created a common axios instance
 */
const axiosInstance = Axios.create({
  baseURL: VRSConst.getUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});
export {
  axiosInstance,
};
