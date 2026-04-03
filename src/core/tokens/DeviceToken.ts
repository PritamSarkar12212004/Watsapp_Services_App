let DeviceToken: string | null = null;

const Set_DeviceToken = ({ token }: { token: string | null }) => {
  DeviceToken = token;
};

const getDeviceToken = () => DeviceToken;
const removeDeviceToken = () => {
  DeviceToken = null;
  return true;
};

export { Set_DeviceToken, getDeviceToken, removeDeviceToken };
