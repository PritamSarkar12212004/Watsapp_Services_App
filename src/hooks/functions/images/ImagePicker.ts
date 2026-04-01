import { launchImageLibrary } from 'react-native-image-picker';
import Tost from '../../../components/global/Tost/Tost';
const ImagePicker = ({ setImgData }: { setImgData: any }) => {
  launchImageLibrary(
    {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    },
    (response: any) => {
      if (response.didCancel) {
        Tost({
          status: 'error',
          data: {
            head: 'Image Picker',
            subData: 'User cancelled image picker',
          },
        });
      } else if (response.error) {
        Tost({
          status: 'error',
          data: {
            head: 'Image Picker',
            subData: 'Something went wrong while picking the image',
          },
        });
      } else if (response.assets && response.assets[0]) {
        setImgData(response.assets[0].uri);
      }
    },
  );
};
export default ImagePicker;
