import { useState } from "react";
import { Image, ImageSourcePropType, Platform, Pressable, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
}

const EmojiList = ({ onSelect, onCloseModal }: props) => {
    const [emoji] = useState<ImageSourcePropType[]>([
        require('../assets/images/emoji1.png'),
        require('../assets/images/emoji2.png'),
        require('../assets/images/emoji3.png'),
        require('../assets/images/emoji4.png'),
        require('../assets/images/emoji5.png'),
        require('../assets/images/emoji6.png'),
    ]);

    return (
        <FlatList 
            data={emoji} 
            horizontal
            showsHorizontalScrollIndicator = {Platform.OS === 'web'}
            contentContainerStyle = {styles.listContainer}
            renderItem={({ item, index }) => (
                <Pressable 
                    onPress={() => {
                        onSelect(item);
                        onCloseModal();
                    }}>
                    <Image source={item} key={index} style={styles.image} />
                </Pressable>
            )}            
        />        
    );
}

export default EmojiList;

const styles =StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});