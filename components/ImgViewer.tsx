import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type props = {
    imgSource: ImageSourcePropType;
    selectedImage?: string;
}

const ImgViewer = ({imgSource, selectedImage}: props) => {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return <Image style={styles.image} source={imageSource} />
}

export default ImgViewer;

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
})