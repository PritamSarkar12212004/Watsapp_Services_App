import Tost from '../../../components/global/Tost/Tost';
import ServerRoutes from '../../../constants/servers/ServerRoutes';
import Api from '../../../services/api/Api';

interface ResendOtpProps {
  phone: string;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

const OtpResendCall = async ({ phone, setLoader }: ResendOtpProps) => {
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
export default OtpResendCall;
