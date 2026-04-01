import axios from 'axios';
import { currentServerIndex, Servers } from '../../constants/servers/Servers';
const Api = axios.create({
  baseURL: Servers[currentServerIndex],
});
export default Api;
