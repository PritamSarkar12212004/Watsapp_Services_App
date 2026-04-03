import Tost from '../../../components/global/Tost/Tost';
import ServerRoutes from '../../../constants/servers/ServerRoutes';
import Api from '../../../services/api/Api';
import { authSlicelogout } from '../../../store/slices/AuthSlice/AuthSlice';
import { setUserData } from '../../../store/slices/userSlice/UserSlice';
import ServiceProvider from '../../../services/Provider';
import KeyChainToken from '../../../constants/secure/keychain/KeyChainToken';
import CoreProvider from '../../../core/Provider';
import UserRoutes from '../../../constants/routes/userRoute/UserRoutes';
interface ProfileSetupProp {
  navigation: any;
  setLoader: any;
  phone: string;
  fullName: string;
  gender: string;
  age: number;
  token: string;
  profilePic: string;
  dispatch: any;
}
const ProfileSetupCall = async ({
  navigation,
  setLoader,
  phone,
  fullName,
  gender,
  age,
  profilePic,
  token,
  dispatch,
}: ProfileSetupProp) => {
  try {
    const deviceId = CoreProvider.TOKEN.DEVICE_TOKEN.GET_DEVICE_TOKEN();
    const response = await Api.post(ServerRoutes.AUTH_SERVICE.PROFILE_SETUP, {
      wpnumber: phone,
      fullName,
      gender,
      age,
      profilePic,
      token,
      deviceId,
    });
    if (response.status === 201) {
      const data = response.data.data;

      await ServiceProvider.SECURE_STORE.KEY_CHAIN.SET_VALUE({
        key: KeyChainToken.GLOBAL.ACCESS_TOKEN,
        value: data.accessToken,
      });
      await ServiceProvider.SECURE_STORE.KEY_CHAIN.SET_VALUE({
        key: KeyChainToken.GLOBAL.REFRESH_TOKEN,
        value: data.refreshToken,
      });

      CoreProvider.TOKEN.ACCESS_TOKEN.SET_TOKEN({
        token: data.accessToken,
      });
      CoreProvider.TOKEN.ACCESS_TOKEN.SET_TOKEN({
        token: data.refreshToken,
      });
      
      dispatch(
        setUserData({
          age: data.age,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          fullName: data.fullName,
          gender: data.gender,
          profilePic: data.profilePic,
          wpnumber: data.wpnumber,
          _id: data._id,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        }),
      );
      dispatch(authSlicelogout());
      setLoader(false);
      navigation.reset({
        index: 0,
        routes: [{ name: UserRoutes.ROOT_ROUTE }],
      });
    } else {
      Tost({
        status: 'error',
        data: {
          head: 'Profile Setup Error',
          subData: 'Something went worng',
        },
      });
      setLoader(false);
    }
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      'Something went wrong. Please try again.';
    Tost({
      status: 'error',
      data: {
        head: 'Profile Setup Error',
        subData: message,
      },
    });
  } finally {
    setLoader(false);
  }
};
export default ProfileSetupCall;
