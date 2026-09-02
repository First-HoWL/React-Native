import { images } from '@/db/info';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function PageScreen() {

    const { id } = useLocalSearchParams<{ id: string }>();

    const image = images.find((img) => img.id === parseInt(id));

    return (
        <View style={ styles.view }>
            <Image source={image?.img} style={styles.image}/>
            <Text style={ styles.mainHeader }>{image?.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={ styles.secondaryHeader }>{image?.smallTitle}</Text>
            </View>
            <Text style={ styles.secondaryHeader }> id: { id } </Text>
            
            <Button title="Back" onPress={ () => {router.back();} } />
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        color: "#fff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainHeader: {
        color: "#fff",
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    secondaryHeader: {
        color: "#fff",
        flex: 1,
        justifyContent: 'center',
        fontSize: 36,
        textAlign: 'center',
    },
    image:{
    height: 300,
    width: 300,
  },
});