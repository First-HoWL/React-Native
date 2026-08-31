import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

export default function Page1() {
  const [count, setCount] = useState(0);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
      >

      <ThemedView style={[styles.container, styles.text]}>
        <ThemedText  style={styles.title}>
          Mathematical formulas
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.text}>
        <ThemedText style={styles.smallTitle}>Linear Equations</ThemedText>
      </ThemedView>

      <ThemedView style={styles.text}>
        <ThemedText>A linear equation is any equation that can be written in the form</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.text}>
        <Pressable onPress={() => {setCount(0)}}>
          <ThemedText style={count == 0? styles.marked: {}}>0</ThemedText>
        </Pressable>
      </ThemedView>



      <ThemedView style={[styles.container, styles.text]}>
        <Pressable onPress={() => {count + 1 > 10 ? alert("Limit reached") : setCount(count + 1)}}>
          <ThemedText style={styles.marked}>ax + b = {count}</ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.text}>
        <ThemedText>where <ThemedText style={styles.textColorfull}>a</ThemedText> and <ThemedText style={styles.textColorfull}>b</ThemedText> are real numbers and <ThemedText style={styles.textColorfull}>x</ThemedText> is a variable. This form is sometimes called the standard form of a linear equation. Note that most linear equations will not start off in this form. Also, the variable may or may not be an <ThemedText style={styles.textColorfull}>x</ThemedText> so don't get too locked into always seeing an <ThemedText style={styles.textColorfull}>x</ThemedText> there.</ThemedText>
      </ThemedView>
      <ThemedView>
        <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={[styles.reactLogo, styles.rotate]}
          />
      </ThemedView>
      
      <ThemedView style={[styles.container, styles.text]}>
        <Pressable onPress={() => {count - 1 < 0 ? alert("Limit reached") : setCount(count - 1)}}>
          <ThemedText style={styles.marked}>- - -</ThemedText>
        </Pressable>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  rotate:{
    transform: [{ rotate: '270deg' }],
    zIndex: -1,
    bottom: 20,
    left: 100,
  },
  text: {
    backgroundColor: "#00000000"
  },
  container: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  smallTitle:{
    fontSize: 20,
    fontWeight: "bold",
  },
  marked: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: "#c23d3da6",
    borderRadius: 10,
  },
  textColorfull:{
    color: "#ab2f2f",
    fontStyle: "italic",
  },
});
