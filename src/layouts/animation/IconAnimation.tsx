import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const IconAnimation = ({
    source,
    width = 24,
    height = 24,
    isActive,
}: any) => {
    const ref = useRef<LottieView>(null);

    useEffect(() => {
        if (isActive) {
            ref.current?.reset();
            setTimeout(() => {
                ref.current?.play();
            }, 50);
        }
    }, [isActive]);

    return (
        <LottieView
            ref={ref}
            source={source}
            style={{ width, height }}
            loop={false}
            autoPlay={false}
        />
    );
};

export default IconAnimation;