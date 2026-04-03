import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AnimationLottie from '../../layouts/animation/AnimationLottie';
import AnimationProvider from '../../assets/Provider';
import CoreProvider from '../../core/Provider';
import UserRoutes from '../../constants/routes/userRoute/UserRoutes';
import AuthRoute from '../../constants/routes/authRoute/AuthRoute';
import ServicesProvider from '../../services/Provider';
import KeychainTokenKey from '../../constants/secure/keychain/KeyChainToken';
import FunctionProvider from '../../functions/Provider';
const SplashLoaderScreen = ({ navigation }: any) => {
  const authVerify = async () => {
    setTimeout(() => {
      const check = async () => {
        const deviceKey = await FunctionProvider.NATIVE.GET_DEVICE_UNIQE_ID();
        CoreProvider.TOKEN.DEVICE_TOKEN.SET_DEVICE_TOKEN({
          token: deviceKey,
        });
        const tokenAuth =
          await ServicesProvider.SECURE_STORE.KEY_CHAIN.GET_VALUE({
            key: KeychainTokenKey.GLOBAL.ACCESS_TOKEN,
          });
        if (tokenAuth) {
          CoreProvider.TOKEN.ACCESS_TOKEN.SET_TOKEN({ token: tokenAuth });
          navigation.reset({
            index: 0,
            routes: [{ name: UserRoutes.ROOT_ROUTE }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: AuthRoute.ROOT_ROUTE }],
          });
        }
      };
      check();
    }, 2500);
  };
  useEffect(() => {
    authVerify();
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <LinearGradient
      colors={['#0a0a0a', '#121212', '#0a2e1f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 items-center justify-center"
    >
      <View className="items-center justify-center">
        <AnimationLottie
          height={280}
          width={280}
          source={AnimationProvider.ANIMATIONS_LOTTI.SPLASH_LOADER}
        />
        <Text className="text-white text-2xl font-bold mt-4 tracking-wide">
          Whatsapp Bot
        </Text>
        <Text className="text-green-500 text-sm mt-2 tracking-wider">
          Experience the future
        </Text>
      </View>
    </LinearGradient>
  );
};

export default SplashLoaderScreen;
