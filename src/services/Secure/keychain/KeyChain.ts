import * as Keychain from 'react-native-keychain';
import Tost from '../../../components/global/Tost/Tost';

const setKeychainValue = async ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  if (typeof key !== 'string' || typeof value !== 'string') {
    Tost({
      status: 'error',
      data: {
        head: 'KeyChain Error',
        subData: 'Key and value must be strings',
      },
    });
    return false;
  }
  await Keychain.setGenericPassword(key, value, {
    service: key,
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
    securityLevel: Keychain.SECURITY_LEVEL.SECURE_SOFTWARE,
  });
  return true;
};

const getKeychainValue = async ({ key }: { key: string }) => {
  if (typeof key !== 'string') {
    return Tost({
      status: 'error',
      data: {
        head: 'KeyChain Error',
        subData: 'Key must be strings',
      },
    });
  }
  const credentials = await Keychain.getGenericPassword({
    service: key,
  });
  if (!credentials) return null;
  return credentials.password;
};

const removeKeychainValue = async ({ Key }: { Key: string }) => {
  await Keychain.resetGenericPassword({ service: Key });
  return true;
};

export { setKeychainValue, getKeychainValue, removeKeychainValue };
