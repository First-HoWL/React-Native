import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import { Alert, FlatList, Pressable, StyleSheet } from 'react-native';


function BlockOfLift({number, count, setCount}: {number: number, count: number, setCount: (value: number) => void}){
    return(
        <ThemedView style={styles.block}>
        <Pressable onPress={() => {setCount(number)}}>
          <ThemedText style={count == number? styles.marked: styles.unmarked}>{number}</ThemedText>
        </Pressable>
      </ThemedView>
    )
}
function ItemList({ count, setCount}: {count: number, setCount: (value: number) => void}) {
  const listItems = [];

  for (let i = 0; i < 11; i++) {
    listItems.push(<BlockOfLift key={i} number={i} count={count} setCount={setCount}/>);
  }

  return (
    <ThemedView style={[styles.container, styles.text]}>
      {listItems}
    </ThemedView>
    );
}

export default function Page1() {
  const [count, setCount] = useState(0);
  const [elem, setelem] = useState([
    {id: 1, name: "Item 1"},
    {id: 2, name: "Item 2"},
    {id: 3, name: "Item 3"},
    {id: 4, name: "Item 4"},
    {id: 5, name: "Item 5"},
    {id: 6, name: "Item 6"},
  ]);

  return (
    <ThemedView style={styles.main}>
      <ItemList count={count} setCount={setCount}/>



      <ThemedView style={[styles.container, styles.text]}>
        <Pressable onPress={() => {count + 1 > 10 ? Alert.alert("Limit reached", "You can only select up to 10 items.") : setCount(count + 1)}}>
          <ThemedText style={styles.marked}> + {count} +</ThemedText>
        </Pressable>
        <Pressable onPress={() => {count - 1 < 0 ? Alert.alert("Limit reached", "You can not select less than 0 items.") : setCount(count - 1)}}>
          <ThemedText style={styles.marked}>- - -</ThemedText>
        </Pressable>
      </ThemedView>


      <ThemedView style={[styles.container, styles.text]}>
        <FlatList
          data={elem}
          renderItem={({ item }) => (
            <ThemedView style={[styles.unmarked, styles.lineBlock]}>
            <ThemedText style={styles.blockInLine}>{item.id}) {item.name} </ThemedText>
            <Pressable onPress={() => {Alert.alert("Attention!", "Are you sure you want to delete this item?\nId:" + item.id + " \nName:" + item.name, [
                { text: "OK", onPress: () => setelem(elem.filter(e => e.id !== item.id)) },
                { text: "Cancel", style: "cancel" }
              ])}}>
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
  main: {
    padding: 20,
    paddingTop: 100,
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
