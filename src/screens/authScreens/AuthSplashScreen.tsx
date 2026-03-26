import { View, Text } from 'react-native';
import React, { useState } from 'react';
import RootWraper from '../../layouts/wrapers/RootWraper';
import ComProvider from '../../components/Provider'
import ToastManager, { Toast } from 'toastify-react-native'

const AuthSplashScreen = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [loader, setLoader] = useState<boolean>(false)

  const inputPhoneValidation = (input: any) => {
    let formate = input.replace(/[^0-9]/g, '');
    if (formate.length > 10) return;
    setPhoneNumber(formate);
  }

  const handleContinue = () => {
    if (phoneNumber.length != 10) {
      console.log("pro")
      Toast.success('Success message!')

    } else {
      console.log(phoneNumber.length)
      setLoader(true)
      setTimeout(() => {
        console.log('Continue with:', phoneNumber);
        setLoader(false)
      }, 2000);
    }
  };

  return (
    <RootWraper>
      <ToastManager />
      <View className='flex-1 flex items-center justify-between pt-20 pb-10'>
        <View className="flex-1 w-full px-6 ">
          <View className="mb-12">
            <Text className="text-4xl font-bold text-white mb-2">Welcome Back!</Text>
            <Text className="text-lg text-zinc-400">Log in with your WhatsApp number</Text>
            <View className="mb-8 mt-5">
              <Text className="text-white text-lg font-semibold mb-3">
                Enter your WhatsApp number
              </Text>
              <ComProvider.INPUTS.AUTH.PHONE_INPUT value={phoneNumber}
                onChangeText={inputPhoneValidation} />
            </View>
            <ComProvider.BUTTONS.AUTH.ACTION_BUTTON value='Continue' loadingState={loader} actionFun={handleContinue} />
          </View>
        </View>
        <View className="mt-8">
          <Text className="text-center text-sm text-zinc-400">
            By continuing, you agree to our{' '}
            <Text className="text-[#25D366]">Terms</Text> and{' '}
            <Text className="text-[#25D366]">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </RootWraper >
  );
};

export default AuthSplashScreen;