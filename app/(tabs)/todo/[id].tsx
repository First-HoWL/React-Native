import { useTodos } from '@/context/TodoContext';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function DetailTodo() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const {getTodo} = useTodos();
    const todo = getTodo(id);

    if (!todo) return null;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Text style={styles.backButton}>Back</Text>
                </Pressable>
                <View style={styles.headerIcons}>
                    <Image source={require('@/assets/images/clocks.png')} style={styles.icon} />
                    <Pressable onPress={() => {}}>
                        <Image source={require('@/assets/images/edit.png')} style={styles.icon} />
                    </Pressable>
                    <Pressable onPress={() => {}}>
                        <Image source={require('@/assets/images/trash.png')} style={styles.icon} />
                    </Pressable>
                </View>
            </View>
            <Text style={styles.title}>{todo.title.toUpperCase()}</Text>
            <Text style={styles.description}>{todo.description}</Text>
            <Text style={styles.footer}>Created at {todo.createdAt}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
        },
        headerIcons: {
            flexDirection: 'row',
            gap: 10,
        },
        backButton: {
            fontSize: 16,
            color: '#007AFF',
        },
        icon: {
            width: 24,
            height: 24,
        },
        title: {
            fontSize: 20,
            fontWeight: '800',
            marginTop: 20,
            color: '#000',
        },
        description: {
            fontSize: 14,
            marginTop: 10,
            color: '#000',
            lineHeight: 20,
        },
        footer: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            color: '#000',
            fontSize: 12,
        },
    });