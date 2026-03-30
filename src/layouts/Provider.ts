import AnimationLottie from './animation/AnimationLottie';
import ProfileSetupLoader from './loader/ProfileSetup/ProfileSetupLoader';
import AuthLoader from './loader/auth/AuthLoader';
const Provider = {
  ANIMATION: {
    LOTTI_ANIMATION: AnimationLottie,
  },
  LOADER: {
    PROFILE_SETUP_LOADER: ProfileSetupLoader,
    AUTH_LOADER: AuthLoader,
  },
};
export default Provider;
