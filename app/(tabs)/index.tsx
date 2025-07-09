import Button from '@/components/Button';
import ImgViewer from '@/components/ImgViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Surface } from "react-native-paper";


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log('Result ', result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image');
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.imageContainer}>
        <ImgViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' theme='primary' onPress={pickImageAsync} />
        <Button label='Use this photo' />
      </View>
    </Surface>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#fff'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff'
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});