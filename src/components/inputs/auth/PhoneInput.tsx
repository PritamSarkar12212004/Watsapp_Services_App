import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
interface PhoneNumberInputProps {
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ value, onChangeText, error }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleClear = () => {
        onChangeText('');
    };

    return (
        <View className="w-full">
            <View
                className={`flex-row items-center rounded-xl bg-zinc-800/60 h-14 border ${error ? 'border-red-500' : isFocused ? 'border-green-500' : 'border-zinc-700'
                    }`}
            >
                <View className="px-4 h-full justify-center">
                    <Text className="text-white text-base font-medium">+91</Text>
                </View>
                <View className="w-px h-3/5 bg-zinc-700" />
                <TextInput
                    className="flex-1 px-4 text-white text-base"
                    placeholder="Phone number"
                    placeholderTextColor="#6b7280"
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType="phone-pad"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    selectionColor="#10b981"
                />
                {value.length > 0 && (
                    <TouchableOpacity onPress={handleClear} className="px-3">
                        <Text className="text-gray-400 text-lg">✕</Text>
                    </TouchableOpacity>
                )}
            </View>
            {error && <Text className="text-red-500 text-xs mt-1 ml-1">{error}</Text>}
        </View>
    );
};

export default PhoneNumberInput;