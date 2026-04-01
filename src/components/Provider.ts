import PhoneInput from './inputs/auth/PhoneInput';
import ActionButton from './buttons/auth/ActionButton';
import ProfileSetupButton from './buttons/profileSetup/ProfileSetupButton';
const Provider = {
  BUTTONS: {
    AUTH: {
      ACTION_BUTTON: ActionButton,
    },
    PROFILE_SETUP: {
      PROFILE_SETUP_BUTTON: ProfileSetupButton,
    },
  },
  INPUTS: {
    AUTH: {
      PHONE_INPUT: PhoneInput,
    },
  },
};
export default Provider;
