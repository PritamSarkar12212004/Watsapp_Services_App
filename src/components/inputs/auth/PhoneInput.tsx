import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const PhoneNumberInput = ({ value, onChangeText }: {
    value: string;
    onChangeText: any
}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View
            className={`flex-row items-center border rounded-xl bg-zinc-900 h-14 ${isFocused ? 'border-[#25D366] border-2' : 'border-zinc-800 border'
                }`}
        >
            <View
                className="px-4 h-full justify-center"
            >
                <Text className="text-white text-base font-semibold">+91</Text>
            </View>
            <View className="w-px h-3/5 bg-zinc-800" />
            <TextInput
                className="flex-1 px-4 text-white text-base"
                placeholder="Phone number"
                placeholderTextColor="#4a4a4a"
                value={value}
                onChangeText={(input) => onChangeText(input)}
                keyboardType="phone-pad"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                selectionColor="#25D366"
            />
        </View>
    );
};

export default PhoneNumberInput;