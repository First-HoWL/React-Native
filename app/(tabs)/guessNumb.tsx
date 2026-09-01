
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import {
    Button,
    FlatList,
    StyleSheet, Text,
    TextInput, View
} from 'react-native';

export default function PageScreen() {
    const [elem, setelem] = useState([] as {name: string, code: number}[]);
    const [inputValue, setInputValue] = useState("");
    const [rnd, setRnd] = useState(0);

    useState(() => {
        setRnd(Math.floor(Math.random() * 100) + 1);
    });

    return (
        <ThemedView style={styles.main}>
            <View style={ styles.view }>
                <Text style={ styles.header }>Guess the Number</Text>
                <Text style={ styles.header }>from 1 to 100</Text>
                <TextInput
                    placeholder="Enter your guess"
                    style={ styles.input }
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <View style={ styles.lineBlock }>
                    <View style={ styles.buttonBlock }>
                        <Button 
                            title="Guess"
                            onPress={() => {
                                if (inputValue === "") {
                                    alert("Please enter a number.");
                                    return;
                                }
                                if (parseInt(inputValue) === rnd) {
                                    setelem([{name: "Congratulations! You guessed the number!", code: 0}, ...elem])
                                    alert("Congratulations! You guessed the number!");
                                }
                                else if (parseInt(inputValue) < rnd) {
                                    setelem([{name: `${inputValue} is too low! Try again.`, code: 1}, ...elem])
                                }
                                else if (parseInt(inputValue) > rnd){
                                    setelem([{name: `${inputValue} is too high! Try again.`, code: 2}, ...elem])
                                }
                                else {
                                    alert("Please enter a number.");
                                }
                                setInputValue("")
                                console.log(rnd)
                            }}
                        />
                    </View>
                    <View style={ styles.buttonBlock }>
                        <Button 
                            title="Restart"
                            onPress={() => {
                                setInputValue("")
                                setRnd(Math.floor(Math.random() * 100) + 1);
                                setelem([])
                                console.log(rnd)
                            }}
                        />
                    </View>
                </View>
            </View>

            <ThemedView style={[styles.container, styles.text]}>
                <FlatList
                    data={elem}
                    renderItem={({ item }) => (
                    <ThemedView style={[styles.unmarked, styles.lineBlock, 
                    item.code === 0 ? styles.code0 : 
                    item.code === 1 ? styles.code1 : 
                    styles.code2]}>
                        <ThemedText style={styles.blockInLine}>{item.name} </ThemedText>
                    </ThemedView>
                    )}
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
    code0:{
        backgroundColor: "#30f807",
    },
    code1:{
        backgroundColor: "#be5656",
    },
    code2:{
        backgroundColor: "#cbeb3f",
    },
    lineBlock:{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    buttonBlock:{
        marginHorizontal: 10,
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