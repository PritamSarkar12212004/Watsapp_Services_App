import Tost from '../../../components/global/Tost/Tost';
import ServerRoutes from '../../../constants/servers/ServerRoutes';
import Api from '../../../services/api/Api';
import routeProvider from '../../../constants/routes/Provider';
interface OtpCallProps {
  phone: string;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
}
const OtpCall = async ({ phone, setLoader, navigation }: OtpCallProps) => {
  setLoader(true);
  try {
    const response = await Api.post(ServerRoutes.OTP_SERVICE.CALL_OTP, {
      phone,
    });
    if (response.status === 200) {
      Tost({
        status: 'success',
        data: {
          head: 'OTP Send',
          subData: response?.data?.message,
        },
      });
      navigation.navigate(routeProvider.AUTH.LOGIN_ROUTE, {
        payload: {
          phone: phone,
        },
      });
    } else {
      Tost({
        status: 'error',
        data: {
          head: 'OTP Error',
          subData: 'Unexpected server response',
        },
      });
    }
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      'OTP generation failed due to server error';
    Tost({
      status: 'error',
      data: {
        head: 'OTP Error',
        subData: message,
      },
    });
  } finally {
    setLoader(false);
  }
};

export default OtpCall;
