import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About screen</Text>
        </View>
    )
}

export default AboutScreen;

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
})