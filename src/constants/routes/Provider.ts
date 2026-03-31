import AuthRoute from './authRoute/AuthRoute';
import ProfileSetupRoute from './profileSetupRoute/ProfileSetupRoute';
import UserRoutes from './userRoute/UserRoutes';
const Provider = {
  AUTH: AuthRoute,
  PROFILE_SETUP: ProfileSetupRoute,
  USER_ROUTE: UserRoutes,
};
export default Provider;
