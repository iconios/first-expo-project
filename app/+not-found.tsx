import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not found' }} />
            <View>
                <Text style={styles.text}>Not found screen</Text>
                <Link href='/(tabs)/index' style={styles.button}>Go back to Home Screen!</Link>    
            </View>
        </>
    )
}

export default NotFoundScreen;

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