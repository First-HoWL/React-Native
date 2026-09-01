
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import {
    Button,
    FlatList,
    Pressable,
    StyleSheet, Text,
    TextInput, View
} from 'react-native';

export default function PageScreen() {
    const [elem, setelem] = useState([] as {id: number, name: string}[]);
    const [inputValue, setInputValue] = useState("");
    return (
        <ThemedView style={styles.main}>
            <View style={ styles.view }>
                <Text style={ styles.header }>Page Screen</Text>
                <TextInput
                    placeholder="Enter text"
                    style={ styles.input }
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <Button 
                    title="Submit"
                    onPress={() => {
                        setelem([...elem, {id: elem.length > 0 ? elem[elem.length - 1].id + 1 : 1, name: inputValue}])
                        setInputValue("")
                        console.log(elem)
                    }}
                />
            </View>

            <ThemedView style={[styles.container, styles.text]}>
                <FlatList
                    data={elem}
                    renderItem={({ item }) => (
                    <ThemedView style={[styles.unmarked, styles.lineBlock]}>
                    <ThemedText style={styles.blockInLine}>{item.id}) {item.name} </ThemedText>
                    <Pressable onPress={() => setelem(elem.filter(e => e.id !== item.id))}>
                        <ThemedText style={styles.warning}>
                            [Delete]
                        </ThemedText>
                        </Pressable>
                    </ThemedView>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1, justifyContent: 'center', alignItems: 'center', color: "#fff",
        
    },
    header: {
        fontSize: 24, fontWeight: 'bold',color: "#fff",
    },
    input: {
        borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10,color: "#fff",
    },
    main: {
        padding: 20,
        paddingTop: 100,
        color: "#fff",
    },
    text: {
        backgroundColor: "#00000000"
    },
    block:{
        display: "flex",
        flexDirection: "row",
    },
    lineBlock:{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    blockInLine:{
        //flexDirection: "column",
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        color: "#000",
    },
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    blockText:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    marked: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: "#c23d3da6",
        borderRadius: 10,
    },
    warning:{
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: "#c23d3d",
        borderRadius: 10,
    },
    unmarked: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: "#ccc",
        color: "#000",
        borderRadius: 10,
    },
    textColorfull:{
        color: "#ab2f2f"
    },
});