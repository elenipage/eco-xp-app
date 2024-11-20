import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';


export default function AddImage ({setImage, image}) {

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        
        setImage(result)
        
        // if (!result.canceled) {
        //     setImage(result.assets[0].uri);
        // }
    };


    // const uploadImage = async () => {
    // if (!image) {
    //     console.error("No image selected");
    //     return;
    // }

    // const apiKey = 'c78994b77edbc78647d0ed78958294b8';
    
    // try {
    //   // Convert the image to a base64 string
    // const base64Image = await FileSystem.readAsStringAsync(image, {
    // encoding: FileSystem.EncodingType.Base64,
    // });

    // const formData = new FormData();
    // formData.append('image', base64Image);

    // const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData, {
    //     headers: {
    //     'Content-Type': 'multipart/form-data',
    //     },
    // });

    // console.log('Image uploaded successfully:', response.data);
    // } 
    // catch (error) {
    // console.error('Image upload failed:', error.response ? error.response.data : error);
    // }
// };

    return !image? <Button mode="contained-tonal" onPress={pickImage}>Pick image from camera roll</Button> : <Image style={styles.icon} source={{ uri: image.assets[0].uri}}></Image>
        
        {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
        {/* {image && <Button mode="contained-tonal" title="Upload Image" onPress={setImage(image)}>Select image</Button>} */}
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
})