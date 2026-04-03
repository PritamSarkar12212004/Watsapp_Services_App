import {
  Set_Access_Token,
  getAccessToken,
  removeAccessToken,
} from './tokens/AccessToken';
import {
  Set_DeviceToken,
  getDeviceToken,
  removeDeviceToken,
} from './tokens/DeviceToken';
const Provider = {
  TOKEN: {
    ACCESS_TOKEN: {
      SET_TOKEN: Set_Access_Token,
      GET_TOKEN: getAccessToken,
      REMOVE_TOKEN: removeAccessToken,
    },
    DEVICE_TOKEN: {
      SET_DEVICE_TOKEN: Set_DeviceToken,
      GET_DEVICE_TOKEN: getDeviceToken,
      REMOVE_DEVICE_TOKEN: removeDeviceToken,
    },
  },
};
export default Provider;
