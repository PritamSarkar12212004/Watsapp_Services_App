import UploadImg from './Cloudanery/UploadImg';
import api from './api/Api';
import {
  getKeychainValue,
  removeKeychainValue,
  setKeychainValue,
} from './Secure/keychain/KeyChain';
const ServiceProvider = {
  Api: api,
  CLOUDANERY: {
    UPLOAD_IMAGE: UploadImg,
  },
  SECURE_STORE: {
    KEY_CHAIN: {
      GET_VALUE: getKeychainValue,
      SET_VALUE: setKeychainValue,
      REMOVE_VALUE: removeKeychainValue,
    },
  },
};
export default ServiceProvider;
