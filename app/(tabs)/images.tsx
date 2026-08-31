import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

type BlockOfImageProps = {
  img: string;
  title: string;
  smallTitle: string;
};


function BlockOfImage({img, title, smallTitle }: BlockOfImageProps){
    return(
        <ThemedView style={styles.genblock} >
                <Image source={img} style={styles.image}/>
                <ThemedView style={styles.block}>
                    <ThemedText style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</ThemedText >
                    <ThemedText style={styles.smallTitle} numberOfLines={2} ellipsizeMode="tail">{smallTitle}</ThemedText>
                </ThemedView>
            </ThemedView>
    )
}

export default function Images() {
  return (
    <>
        <ThemedView style={styles.main}>
            <BlockOfImage img={require("@/assets/images/react-logo.png")} title="React Native" smallTitle="Создание мобильных приложений"/>
            <BlockOfImage img={require("@/assets/images/android-icon-monochrome.png")} title="React Native" smallTitle="Создание мобильных приложений"/>
            <BlockOfImage img={require("@/assets/images/splash-icon.png")} title="React Native" smallTitle="Создание мобильных приложений"/>
            <BlockOfImage img={require("@/assets/images/partial-react-logo.png")} title="React Native" smallTitle="Создание мобильных приложений"/>
        </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    paddingTop: 60,
  },
  image:{
    height: 100,
    width: 100,
  },
  genblock:{
    flexDirection:"row",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#3d3d3d"
  },
  block:{
    backgroundColor: "#3d3d3d",
    flex: 1,
    flexDirection: "column",
    padding: 10,
    
  },
  title: {
    backgroundColor: "#3d3d3d",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 4,
  },
  smallTitle:{
    backgroundColor: "#3d3d3d",
    fontSize: 12,
    fontWeight: "bold",
    color: "#ccc",
  },
});
