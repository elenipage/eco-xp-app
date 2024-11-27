import { Button } from 'react-native-paper'
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer'

export default function AddImage ({ setPhoto, supabase, setPath, disabled }) {

    const pickImage = async () => {

        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            
            const base64Data = await FileSystem.readAsStringAsync(result.assets[0].uri, {
                encoding: FileSystem.EncodingType.Base64,
            });

            const { data, error } = await supabase
            .storage
            .from('Photos')
            .upload(result.assets[0].fileName, decode(base64Data), {
                contentType: 'image/png'
            })

            if (error) {
                setIsLoading(false)
                console.error('Upload failed:', error.message);
            } else {
                setPhoto(result.assets[0])
                setIsLoading(false)
                setPath(data.path)
            };
        } catch {
            alert("Error uploading file:", error.message);
        }
    };

    return <Button style={{ marginBottom: 10 }} disabled={!disabled} mode="contained-tonal" onPress={pickImage}>Pick image from camera roll</Button> 

}