import { Button } from 'react-native-paper'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera, CameraView } from 'expo-camera';
import { Loader } from "../components/Loader";
import { decode } from 'base64-arraybuffer'

export default function TakePicture({photo, setPhoto, setPath, setTakingPhoto, supabase}) {

    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [loadingProgress, setLoadingProgress] = useState(0)

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

    const uploadImage = async (photo) => {

        setIsLoading(true)

        try{

            if (!photo) {
                return;
            };

            const { data, error } = await supabase
                .storage
                .from('Photos')
                .upload(`image-${Date.now()}.png`, decode(photo.base64), {
                    contentType: 'image/png',
                    cacheControl: '3600',
                    upsert: false,
                });

            if (error) {
                setIsLoading(false)
                console.error('Upload failed:', error.message);
            } else {
                setIsLoading(false)
                setPath(data.path)
                setTakingPhoto(false)
            };
            
        } catch (error) {
            alert("Error uploading file:", error.message);
        } 

    }

    if (photo) {
        return isLoading? <Loader loadingProgress={loadingProgress}/> : (
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
