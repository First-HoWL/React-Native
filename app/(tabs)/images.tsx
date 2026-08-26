import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

function BlockOfImage({ title, smallTitle }: BlockOfImageProps){
    return(
        <ThemedView style={styles.genblock} >
                <Image source={require('@/assets/images/react-logo.png')} style={styles.image}/>
                <ThemedView style={styles.block}>
                    <ThemedText style={styles.title} numberOfLines={1} ellipsizeMode="tail">{BlockOfImageProps.title}</ThemedText >
                    <ThemedText style={styles.smallTitle} numberOfLines={2} ellipsizeMode="tail">{smallTitle}</ThemedText>
                </ThemedView>
            </ThemedView>
    )
}

export default function Images() {
  return (
    <>
        <ThemedView style={styles.main}>
            <BlockOfImage title="React Native" smallTitle="Создание мобильных приложений"/>
        </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    paddingTop: 60,
  },
  image:{
    height: 100,
    width: 100,
  },
  genblock:{
    flexDirection:"row",
  },
  block:{
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 4,
  },
  smallTitle:{
    fontSize: 14,
    fontWeight: "bold",
  },
});
