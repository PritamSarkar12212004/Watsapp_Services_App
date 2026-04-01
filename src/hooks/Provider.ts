import OtpResendCall from './apiCall/auth/OtpResendCall';
import OtpVerifyCall from './apiCall//auth/OtpVerifyCall';
import ProfileSetupCall from './apiCall/auth/ProfileSetupCall';
import OtpCall from './apiCall/auth/OtpCall';
import ImagePicker from './functions/images/ImagePicker';
const HookProvider = {
  Api: {
    Auth: {
      CallOtp: OtpCall,
      VERIFY_OTP: OtpVerifyCall,
      RESEND_OTP: OtpResendCall,
    },
    PROFILE_SETUP: {
      PROFILE_SETUP: ProfileSetupCall,
    },
  },
  FUNCTIONS: {
    IMAGE: {
      IMAGE_PICKER: ImagePicker,
    },
  },
};
export default HookProvider;
