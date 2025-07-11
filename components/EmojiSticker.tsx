import { ImageSourcePropType } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";


type props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
};

const EmojiSticker = ({ imageSize, stickerSource }: props) => {
    const scaleImage = useSharedValue(imageSize)
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    // Gesture objects
    const doubleTap = Gesture.Tap().numberOfTaps(2).onStart(() => {
        if (scaleImage.value !== imageSize * 2) {
            scaleImage.value = scaleImage.value * 2;
        } else{
            scaleImage.value = Math.round(scaleImage.value/2);
        }
    });

    const drag = Gesture.Pan().onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    //Image style variable
    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[containerStyle, { top: -300 }]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image 
                    source={stickerSource} 
                    style={[imageStyle, { width: imageSize, height: imageSize }]}
                    resizeMode='contain'
                />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}

export default EmojiSticker;