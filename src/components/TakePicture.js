import { Button } from 'react-native-paper'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useEffect, useRef, useState } from 'react';
import { Camera, CameraView } from 'expo-camera';

export default function TakePicture({setPath, setTakingPhoto, supabase}) {

    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text>Requesting permissions...</Text>
    } else if (!hasCameraPermission) {
        return <Text>Permission for camera not granted. Please change this in settings.</Text>
    }

    let takePic = async () => {
    let options = {
        quality: 1,
        base64: true,
        exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);

    };

    const convertPhotoToArrayBuffer = async (uri) => {
        const fileInfo = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
        });
        const binary = atob(fileInfo);  
        const arrayBuffer = new ArrayBuffer(binary.length);
        const view = new Uint8Array(arrayBuffer);
        for (let i = 0; i < binary.length; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return arrayBuffer;
    };

    const uploadImage = async (photo) => {

        console.log(supabase.supabaseUrl)

        try{

            if (!photo) {
                console.error("No image selected");
                return;
            };

            const photoUri = photo.uri

            const arrayBuffer = await convertPhotoToArrayBuffer(photoUri);

            const { data, error } = await supabase
                .storage
                .from('Photos')
                .upload(`image-${Date.now()}.png`, arrayBuffer, {
                    contentType: 'image/png',
                    cacheControl: '3600',
                    upsert: false,
                });

            if (error) {
                console.error('Upload failed:', error.message);
            } else {
                console.log('Upload successful:', data);
                setPath(data.fullPath)
                setTakingPhoto(false)
            };
            
        
        } catch (error) {
            alert("Error uploading file:", error.message);
        } 

    }

    if (photo) {
        return (
            <SafeAreaView style={styles.container}>
            <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
            <Button mode="contained-tonal" title="upload" onPress={() => uploadImage(photo)}>Upload</Button>
            <Button mode="contained-tonal" title="Discard" onPress={() => setPhoto(undefined)}>Discard</Button>
        </SafeAreaView>
        );
    }
    
    return (
        <CameraView style={styles.container} ref={cameraRef}>
        <View>
            <Button mode="contained-tonal" title="Take Pic" onPress={takePic}>Take picture</Button>
        </View>
        </CameraView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent:'flex-end',
    },
    preview: {
        alignSelf: 'stretch',
        flex: 1
    }
});
