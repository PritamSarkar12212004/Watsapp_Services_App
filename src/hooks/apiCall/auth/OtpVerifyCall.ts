import Tost from '../../../components/global/Tost/Tost';
import ProfileSetupRoute from '../../../constants/routes/profileSetupRoute/ProfileSetupRoute';
import ServerRoutes from '../../../constants/servers/ServerRoutes';
import Api from '../../../services/api/Api';
import { setAuthData } from '../../../store/slices/AuthSlice/AuthSlice';
interface OtpVarifyProps {
  otp: string;
  phone: string;
  setLoader: any;
  dispatch: any;
}

const OtpVerifyCall = async ({
  otp,
  phone,
  setLoader,
  dispatch,
  navigation,
}: OtpVarifyProps & { navigation: any }) => {
  setLoader(true);
  try {
    const response = await Api.post(ServerRoutes.OTP_SERVICE.VERIFY_OTP, {
      otp,
      phone,
    });

    Tost({
      status: 'success',
      data: {
        head: 'Verification Successful',
        subData: 'Your phone number has been verified successfully.',
      },
    });

    dispatch(
      setAuthData({
        phone,
        token: response.data.token,
      }),
    );

    navigation.reset({
      index: 0,
      routes: [{ name: ProfileSetupRoute.ROOT_ROUTE }],
    });
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      'Something went wrong. Please try again.';

    Tost({
      status: 'error',
      data: {
        head: 'Verification Failed',
        subData: message,
      },
    });
  } finally {
    setLoader(false);
  }
};
export default OtpVerifyCall;
