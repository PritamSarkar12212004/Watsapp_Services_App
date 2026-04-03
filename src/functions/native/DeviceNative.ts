import DeviceInfo from 'react-native-device-info';

const DeviceUniqeCode = async () => {
  const id = await DeviceInfo.getUniqueId();
  console.log(id);
  return id;
};

export { DeviceUniqeCode };
