import {
  Set_Access_Token,
  getAccessToken,
  removeAccessToken,
} from './tokens/AccessToken';
const Provider = {
  TOKEN: {
    ACCESS_TOKEN: {
      SET_TOKEN: Set_Access_Token,
      GET_TOKEN: getAccessToken,
      REMOVE_TOKEN: removeAccessToken,
    },
  },
};
export default Provider;
