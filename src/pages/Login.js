import { useEffect } from "react";
import BaseLayout from "../components/BaseLayout";
import StandardButton from "../components/StandardButton";
import { useUser } from "../context/user-context";
import { fetchUserByID } from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

export function LoginPage() {
    const {user, setUser} = useUser()
    const navigation = useNavigation();

    
    
    
    function handleLogin(){
        fetchUserByID(1)
        .then((fetcheduser)=>{
            setUser(fetcheduser)
        }).then(()=>{
            navigation.navigate('Profile')
        })
    }
  
  
    return (
    <BaseLayout>
    <Button onPress={handleLogin}>Login</Button>
    </BaseLayout>
  );
}

