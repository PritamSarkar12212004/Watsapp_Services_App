import { View, Modal, StyleSheet, ActivityIndicator } from 'react-native'
import { BlurView } from "@react-native-community/blur";
import React from 'react'

const Loader = ({ status }: {
    status: boolean
}) => {
    return (
        <Modal visible={status} transparent style={{
            flex: 1,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center"
        }} animationType='none'>
            <BlurView
                style={styles.absolute}
                blurType="dark"
                blurAmount={1.5}
                reducedTransparencyFallbackColor="white"
            />
            <View className='w-full flex flex-1 items-center justify-center'>
                <ActivityIndicator color={"white"} size={"large"} />
            </View>
        </Modal>
    )
}

export default Loader
const styles = StyleSheet.create({
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});