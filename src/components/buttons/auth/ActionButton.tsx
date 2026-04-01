import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface ActionButtonProps {
    actionFun: () => void;
    loadingState: boolean;
    value: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ actionFun, loadingState, value }) => {
    return (
        <TouchableOpacity
            disabled={loadingState}
            onPress={actionFun}
            activeOpacity={0.85}
            className="bg-green-600 rounded-xl h-14 justify-center items-center shadow-md"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 3,
            }}
        >
            {loadingState ? (
                <ActivityIndicator animating={true} color="white" size="small" />
            ) : (
                <Text className="text-white text-lg font-semibold tracking-wide">{value}</Text>
            )}
        </TouchableOpacity>
    );
};

export default ActionButton;