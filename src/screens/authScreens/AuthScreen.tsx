import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import ComProvider from '../../components/Provider';
import Tost from '../../components/global/Tost/Tost';
import HookProvider from '../../hooks/Provider';
import Icon from '../../provider/icons/Icon';
import { useDispatch } from 'react-redux';

const AuthScreen = ({ navigation, route }: any) => {
    const { phone } = route.params.payload as { phone: string };
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loader, setLoader] = useState(false);
    const [resendLoader, setResendLoader] = useState(false);
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const dispatch = useDispatch()
    const handleOtpChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text.length === 1 && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace') {
            if (index > 0) {
                // If current input is non-empty, clear it first
                if (otp[index] !== '') {
                    const newOtp = [...otp];
                    newOtp[index] = '';
                    setOtp(newOtp);
                }
                // Move focus to previous input
                inputRefs.current[index - 1]?.focus();
            } else {
                // At first input, just clear it if needed
                if (otp[0] !== '') {
                    const newOtp = [...otp];
                    newOtp[0] = '';
                    setOtp(newOtp);
                }
            }
        }
    };

    const getOtpString = () => otp.join('');

    const handleVerify = async () => {
        const otpString = getOtpString();
        if (otpString.length !== 6) {
            Tost({
                status: 'error',
                data: {
                    head: 'Error',
                    subData: 'Please enter the 6-digit OTP',
                },
            });
        } else {
            HookProvider.Api.Auth.VERIFY_OTP({
                otp: otpString,
                phone: phone,
                setLoader: setLoader,
                dispatch: dispatch,
                navigation: navigation
            })
        }
    };

    const handleResend = async () => {
        if (!canResend) return;
        setResendLoader(true);
        await HookProvider.Api.Auth.RESEND_OTP({ phone: phone, setLoader: setResendLoader });
        setTimer(30);
        setCanResend(false);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0 && !canResend) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setCanResend(true);
        }
        return () => clearInterval(interval);
    }, [timer, canResend]);

    return (
        <View className="flex-1 flex items-center justify-between pt-10 pb-10">
            <View className="flex-1 w-full px-6 flex gap-10">
                <View className=''>
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} className='h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center'>
                        <Icon color='white' name={"arrow-left"} size={25} />
                    </TouchableOpacity>
                </View>
                <View className="mb-8">
                    <Text className="text-4xl font-bold text-white mb-2">Verify OTP</Text>
                    <Text className="text-lg text-zinc-400 mb-6">
                        We've sent a 6-digit code to{' '}
                        <Text className="text-white font-semibold">+91 {phone}</Text>
                    </Text>
                    <View className="flex-row justify-between mb-8">
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => (inputRefs.current[index] = ref)}
                                className="w-12 h-14 bg-zinc-800/60 rounded-xl text-white text-2xl text-center border border-zinc-700 focus:border-green-500"
                                keyboardType="number-pad"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleOtpChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                selectionColor="#10b981"
                            />
                        ))}
                    </View>
                    <ComProvider.BUTTONS.AUTH.ACTION_BUTTON
                        value="Verify"
                        loadingState={loader}
                        actionFun={handleVerify}
                    />
                    <View className="mt-6 flex-row justify-center items-center">
                        {resendLoader ? (
                            <Text className="text-zinc-400 text-sm">Resending...</Text>
                        ) : canResend ? (
                            <TouchableOpacity activeOpacity={0.8} onPress={handleResend}>
                                <Text className="text-green-500 text-sm font-semibold">Resend OTP</Text>
                            </TouchableOpacity>
                        ) : (
                            <Text className="text-zinc-400 text-sm">
                                Resend OTP in <Text className="text-white">{timer}s</Text>
                            </Text>
                        )}
                    </View>
                </View>
            </View>
            <View className="mt-8">
                <Text className="text-center text-sm text-zinc-400">
                    Didn't receive the code? Check your WhatsApp or try again.
                </Text>
            </View>
        </View>
    );
};

export default AuthScreen;