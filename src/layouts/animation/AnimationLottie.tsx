import React from "react";
import LottieView from "lottie-react-native";

const AnimationLottie = ({ source, width, height }: {
    source: any;
    width: number;
    height: number
}) => {
    return (
        <LottieView
            source={source}
            style={{ width: width, height: height }}
            autoPlay
            loop

        />
    );
}
export default AnimationLottie