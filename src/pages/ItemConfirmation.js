import { StyleSheet, Image, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Surface, Button } from "react-native-paper";
import BaseLayout from '../../src/components/BaseLayout.js'
import React,{ useState, useRef } from 'react';
import LottieView from 'lottie-react-native';

export function ItemConfirmation() {

  const itemTitle = "Bleach"
  const itemMaterial = "Plastic"
  const itemImgUrl = 'https://m.media-amazon.com/images/I/41F3HIxG3TL._AC_.jpg'
  const itemXP = 10
  const isRecyclable = true;

  const confettiRef = useRef(null)

  const [isRecycled, setIsRecycled] = useState(false)
  const [isBinned, setIsBinned] = useState(false)

  function triggerConfetti() {
    confettiRef.current?.play(0);
  }
  
  return (
    <SafeAreaProvider>
      <BaseLayout>
        <View style={styles.container}>
          <Surface elevation={3}
            style={{
              marginBottom:20,
              padding: 20,
              height: 300,
            width: 300,
            margin: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius:20
          }}>
            <Image
              style={styles.item_img}
              source={{
                uri: itemImgUrl,
              }}
              />
              <Text style={styles.titleText}>Item: {itemTitle}</Text>
              <Text style={styles.titleText}>Material: {itemMaterial}</Text>
          </Surface>
          <Surface elevation={3}
            style={{
              marginBottom:20,
              padding: 20,
              height: 300,
              width: 300,
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius:20
          }}>
            {isRecyclable? 
            <View style={styles.container}>
              <Image style={styles.icon}
              source={require('../../assets/recycling-bin.png')} ></Image>
              <Text style={styles.titleText}>You can recycle me!!</Text>
              {isRecycled? <Text>Congrats, you gained {itemXP} xp</Text> : <Button onPress={() => {setIsRecycled(true)}} mode="contained-tonal">Recycle {itemTitle} for {itemXP} XP</Button>}
            </View> : 
            <View style={styles.container}>
              <Image style={styles.icon}
              source={require('../../assets/dustbin.png')} ></Image>
              <Text style={styles.titleText}>This item is not recyclable</Text>
              {isBinned? <Text>You binned {itemTitle}</Text> : <Button onPress={() => setIsBinned(true)} mode="contained-tonal">Bin item: {itemTitle}</Button>}
            </View>}
          </Surface>
        {/* <LottieView
          ref={confettiRef}
          source={require('../../assets/confetti.json')}
          autoPlay={false}
          loop={false}
          style={styles.lottie}
          resizeMode='cover'
        /> */}
        </View>
      </BaseLayout>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  item_img: {
    width: 50,
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lottie: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  }
});