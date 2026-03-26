import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const ActionButton = ({ actionFun, loadingState, value }: {
    actionFun: () => void
    loadingState: boolean,
    value: string

}) => {
    return (
        <TouchableOpacity
            disabled={loadingState}
            onPress={actionFun}
            activeOpacity={0.9}
            className="shadow-lg bg-green-600 rounded-xl flex items-center justify-center h-14"
            style={{
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 5,
            }}
        >
            {
                loadingState ? <ActivityIndicator animating={true} color={MD2Colors.white} size={"small"} />
                    : <Text className="text-white text-lg font-semibold">{value}</Text>

            }
        </TouchableOpacity>
    )
}

export default ActionButton