import { StyleSheet, Image, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Surface, Button } from "react-native-paper";
import { useRoute } from "@react-navigation/native"
import BaseLayout from '../../src/components/BaseLayout.js'
import React,{ useState, useRef, useEffect } from 'react';
import { useUser } from '../context/user-context.js';
import { Loader } from '../components/Loader.js';
import { IsRecyclableButtons } from '../components/IsRecyclableButtons.js';


export function ItemConfirmation() {
  const route = useRoute()
  const { scannedItemData } = route.params
  const itemXP = 10
  const [isRecyclable, setIsRecyclable] = useState(false);
  const confettiRef = useRef(null)
  const [isRecycled, setIsRecycled] = useState(false)
  const [isBinned, setIsBinned] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()

  useEffect(()=> {
    confettiRef.current?.play(0);
  },[isRecycled])

  if (isLoading) {return <Loader/>}
  
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
              source={{ uri: scannedItemData.img_url || "https://t4.ftcdn.net/jpg/01/05/29/71/360_F_105297184_FaBQJDmTsKQMfkrVwonZkejAzr0Rzbj4.jpg"}}
              
              />
              <Text style={styles.titleText}>Item: {scannedItemData.item_name}</Text>
              <Text style={styles.titleText}>Material ID: {scannedItemData.item_id}</Text>
          </Surface>
          <IsRecyclableButtons isRecycled={isRecycled} setIsRecycled={setIsRecycled} isBinned={isBinned} setIsBinned={setIsBinned} scannedItemData={scannedItemData} isRecyclable={isRecyclable} setIsRecyclable={setIsRecyclable}/>
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
    width: "100%",
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