import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import Icon from '../../provider/icons/Icon';
import ComProvider from '../../components/Provider'
import HookProvider from '../../hooks/Provider'
import ValidationProvider from '../../validations/Provider'
import Tost from '../../components/global/Tost/Tost';
import LayoutProvider from '../../layouts/Provider'
import { useDispatch, useSelector } from 'react-redux';
import ServiceProvider from '../../services/Provider'

const ProfileSetupScreen = ({ navigation }: any) => {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState<number | any>(null);
    const [profilePic, setProfilePic] = useState<string | null | any>(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const phone = useSelector((state: any) => state.AuthSlice.phone)
    const token = useSelector((state: any) => state.AuthSlice.token)
    const validateForm = async () => {
        try {
            await ValidationProvider.PROFILE_SETUP.PROFILE_INPUT.validate(
                {
                    fullName,
                    gender,
                    age: Number(age),
                    profilePic,
                },
                { abortEarly: true }
            );
            return true;
        } catch (err: any) {
            Tost({
                status: "error",
                data: {
                    head: "Validation Error",
                    subData: err.message
                }
            })
            return false;
        }
    };

    const handleSubmit = async () => {
        const isValid = await validateForm();
        if (!isValid) return;
        setLoading(true)
        const ImgUpload = await ServiceProvider.CLOUDANERY.UPLOAD_IMAGE({ fileUri: profilePic })
        if (ImgUpload === null) {
            Tost({
                status: "error",
                data: {
                    head: "Image Uploading Error",
                    subData: "Somethig went wrong while image uploading"
                }
            })
        }
        await HookProvider.Api.PROFILE_SETUP.PROFILE_SETUP({
            age: age,
            fullName: fullName,
            gender: gender,
            phone: phone,
            profilePic: ImgUpload,
            token: token,
            navigation: navigation,
            setLoader: setLoading,
            dispatch: dispatch
        })

    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-black"
        >
            <LayoutProvider.LOADER.PROFILE_SETUP_LOADER status={loading} />
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View className="flex-1 px-6 pt-12 pb-8">
                    <Text className="text-3xl font-bold text-white mb-2">Complete Your Profile</Text>
                    <Text className="text-zinc-400 text-base mb-8">
                        Tell us a bit about yourself to personalize your experience
                    </Text>
                    <View className="items-center mb-8">
                        <TouchableOpacity onPress={() => {
                            HookProvider.FUNCTIONS.IMAGE.IMAGE_PICKER({
                                setImgData: setProfilePic
                            })
                        }} activeOpacity={0.7}>
                            <View className="relative">
                                {profilePic ? (
                                    <View className="w-36 h-36 rounded-full overflow-hidden border-2 border-green-500">
                                        <Image
                                            source={{ uri: profilePic }}
                                            className="w-full h-full"
                                        />
                                        <Image
                                            source={{ uri: profilePic }}
                                            className="w-full h-full"
                                            resizeMode="cover"
                                        />
                                    </View>
                                ) : (
                                    <View className="w-36 h-36 rounded-full bg-zinc-800 justify-center items-center border-2 border-zinc-700">
                                        <Icon name="camera-plus" size={40} color="#6b7280" />
                                    </View>
                                )}
                                <View className="absolute bottom-0 right-0 bg-green-600 rounded-full p-2 border-2 border-black">
                                    <Icon name="pencil" size={16} color="white" />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Text className="text-zinc-400 text-sm mt-2">Tap to add profile photo</Text>
                    </View>
                    <View className="mb-6">
                        <Text className="text-white text-base font-medium mb-2">Full Name</Text>
                        <View className="flex-row items-center bg-zinc-800/60 rounded-xl px-4 border border-zinc-700 focus:border-green-500">
                            <Icon name="account" size={20} color="#6b7280" />
                            <TextInput
                                className="flex-1 py-4 text-white text-base ml-3"
                                placeholder="Enter your full name"
                                placeholderTextColor="#6b7280"
                                value={fullName}
                                onChangeText={setFullName}
                            />
                        </View>
                    </View>
                    <View className="mb-6">
                        <Text className="text-white text-base font-medium mb-2">Gender</Text>
                        <View className="flex-row bg-zinc-800/60 rounded-xl p-2 border border-zinc-700">
                            <RadioButton.Group
                                onValueChange={(value) => setGender(value)}
                                value={gender}
                            >
                                <View className="flex-row items-center flex-1 justify-around gap-2">
                                    <View className="flex-row items-center">
                                        <RadioButton value="male" color="#10b981" uncheckedColor="#6b7280" />
                                        <Text className="text-white ml-1">Male</Text>
                                    </View>
                                    <View className="flex-row items-center">
                                        <RadioButton value="female" color="#10b981" uncheckedColor="#6b7280" />
                                        <Text className="text-white ml-1">Female</Text>
                                    </View>
                                    <View className="flex-row items-center">
                                        <RadioButton value="other" color="#10b981" uncheckedColor="#6b7280" />
                                        <Text className="text-white ml-1">Other</Text>
                                    </View>
                                </View>
                            </RadioButton.Group>
                        </View>
                    </View>

                    {/* Age */}
                    <View className="mb-8">
                        <Text className="text-white text-base font-medium mb-2">Age</Text>
                        <View className="flex-row items-center bg-zinc-800/60 rounded-xl px-4 border border-zinc-700 focus:border-green-500">
                            <Icon name="cake-variant" size={20} color="#6b7280" />
                            <TextInput
                                className="flex-1 py-4 text-white text-base ml-3"
                                placeholder="Enter your age"
                                placeholderTextColor="#6b7280"
                                value={age}
                                onChangeText={setAge}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                    <ComProvider.BUTTONS.PROFILE_SETUP.PROFILE_SETUP_BUTTON actionFun={() => handleSubmit()} loadingState={loading} value='Continue' />
                    <Text className="text-center text-zinc-500 text-xs mt-6">
                        By continuing, you agree to our Terms and Privacy Policy
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ProfileSetupScreen;