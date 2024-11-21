import { View, Text } from "react-native"
import { Surface } from "react-native-paper"

export function FollowersFollowing () {
    return (
        <View style={{flexDirection:"row", alignItems: "center", justifyContent: "space-between"}}>
            <Surface style={{alignItems: "center", justifyContent: "center", padding:10, borderRadius:10}}>
                <Text>Followers</Text>
                <Text>0</Text>
            </Surface>
            <Surface style={{alignItems: "center", justifyContent: "center", padding:10, borderRadius:10}}>
                <Text>Following</Text>
                <Text>0</Text>
            </Surface>
        </View>
    )
}