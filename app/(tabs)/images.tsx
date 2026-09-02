import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { images } from '@/db/info';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';


type BlockOfImageProps = {
  id: number;
  img: string;
  title: string;
  smallTitle: string;
};


function BlockOfImage({id, img, title, smallTitle }: BlockOfImageProps){
    return(
      <Link href={`/${id}`} style={styles.genblock} > 
        <Image source={img} style={styles.image}/>
        <ThemedView style={styles.block}>
            <ThemedText style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</ThemedText >
            <ThemedText style={styles.smallTitle} numberOfLines={2} ellipsizeMode="tail">{smallTitle}</ThemedText>
        </ThemedView>
      </Link>
    )
}

export default function Images() {
  return (
    <>
        <ThemedView style={styles.main}>
            <FlatList data={images} renderItem={({ item }) => (
                <BlockOfImage
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    smallTitle={item.smallTitle}
                />
            )}/>
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
