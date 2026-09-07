import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTodos } from '@/context/TodoContext';
import { Image } from 'expo-image';
import { router } from "expo-router";
import {
    FlatList,
    Pressable,
    StyleSheet,
} from 'react-native';

export default function HomeScreen() {
    const { todos } = useTodos();
    return (
        <ThemedView style={styles.main}>
            
            
            <ThemedView style={styles.headerBox}>
                <ThemedView>
                    <Image source={require('@/assets/images/logo.png')} style={{ height: 19, width: 83 }} />
                </ThemedView>
                <ThemedView>    
                    <Image source={require('@/assets/images/settings.png')} style={{ height: 24, width: 24 }} />
                </ThemedView>
            </ThemedView>

            <ThemedView style={[styles.headerBox, { paddingTop: "10%",}]}>
                <ThemedView style={styles.blockRow}>
                    <Image source={require('@/assets/images/logoBookshelf.png')} style={{ height: 25, width: 25, marginRight: 10 }} />
                    <ThemedText style={styles.listHeader}>LIST OF TODO</ThemedText>
                </ThemedView>
                <ThemedView>
                    <Image source={require('@/assets/images/filter.png')} style={{ height: 24, width: 24 }} />
                </ThemedView>
            </ThemedView>
            <FlatList 
                data={todos}
                contentContainerStyle={{ gap: 20, paddingTop: 20 }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable onPress={() =>
                        router.push({
                        pathname: '/(tabs)/todo/[id]',
                        params: { id: item.id },
                        })
                    } style={styles.card}>
                        <ThemedText style={styles.cardTitle}>{item.title}</ThemedText>
                        <ThemedText style={styles.cardDesc} numberOfLines={2}>{item.description}</ThemedText>
                        <ThemedText style={styles.cardDate}>Conected at {item.createdAt}</ThemedText>
                    </Pressable>
                )}
            />
            <Pressable style={styles.fab} onPress={() => router.push(`/todo/add`)}>
                <ThemedText style={styles.fabText}>+</ThemedText>
            </Pressable>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    blockRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    main: {
        height: "100%",
        padding: 30,
        paddingTop: "14%",
    },
    listHeader: {
        fontSize: 36,
        marginTop: 2,
        
        fontFamily: "Bebas Neue",
        color: "#F76C6A",
        fontWeight: "600",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#F76C6A",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
    },
    fabText: {
        color: "#fff",
        fontSize: 40,
        marginTop: -8,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
    },
    cardTitle: {
        color: "white",
        fontWeight: 700,
        fontSize: 15,
        marginBottom: 4,
    },
    cardDesc: {
        color: "white",
        opacity: 0.9,
        fontSize: 13,
        marginBottom: 8,
    },
    cardDate: {
        color: "white",
        opacity: 0.7,
        fontSize: 11,
    },
});