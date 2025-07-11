import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

const EmojiPicker = ({ isVisible, onClose, children}: props) => {
    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Choose a sticker</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color='#fff' size={22} />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    )
}

export default EmojiPicker;

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
});