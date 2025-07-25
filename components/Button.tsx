import { FontAwesome } from "@expo/vector-icons";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type props = {
    label: string;
    theme?: 'primary';
    onPress?: () => void;
}

const Button = ({label, theme, onPress}: props) => {
    if (theme === 'primary') {
        return (
            <View
                style={[styles.buttonContainer, 
                    { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 }, 
                    { marginTop: Platform.OS === 'android' ? 24 : 0 }
                ]}
            >
                <Pressable
                    style={[styles.button, { backgroundColor: '#fff' }]}
                    onPress={onPress}
                >
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (        
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>
                    {label}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    }
})

export default Button;