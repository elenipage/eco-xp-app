
import { createClient } from '@supabase/supabase-js';  



const supabaseUrl = 'https://xwjqudfimaqvqprwqqhn.supabase.co';  
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3anF1ZGZpbWFxdnFwcndxcWhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjI3NTIzOCwiZXhwIjoyMDQ3ODUxMjM4fQ.47gQOB0-x51gixOJPkqH_HKogdF6tcHZZnJbbWgUPds';

const supabase = createClient(supabaseUrl, supabaseServiceKey, {headers: 
    {
        Authorization: `Bearer ${supabaseServiceKey}`,
    }
});

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
        }
        
    } catch (error) {
        alert("Error uploading file:", error.message);
    } finally {
        setUploading(false)
    }
}
