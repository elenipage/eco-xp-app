import { StyleSheet, Text, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Streak from "../components/StreakChart";
import commitsData from "../components/data/streakData";
import { ScrollView } from "react-native-gesture-handler";
import BaseLayout from "../components/BaseLayout";
import { FollowersFollowing } from "../components/FollowersFollowing";
import { Surface } from "react-native-paper";

export function Profile() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView>
      <BaseLayout>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              marginBottom: 20,
              borderRadius: 100,
              border: "5px solid #6DA99A",
            }}
            source={{
              uri: "https://media.licdn.com/dms/image/v2/D4E03AQHp3QR7NwD02w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715085387323?e=1737590400&v=beta&t=cMjFvIwY5d0XCGXUKpdbP9IkEXuIP2IcjGQDEL21lRU",
            }}
          />
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 25, marginBottom: 10 }}>LouisUser</Text>
            <FollowersFollowing />
          </View>
        </View>
        <Surface style={{width:"100%", alignItems:"center", justifyContent: "center", padding:10, borderRadius:10, marginBottom:20}}>
          <Text style={{width:"100%", fontSize:20, marginBottom:10}}>Hi Louis!</Text>
          <Text style={{width:"100%", fontSize:16, marginBottom:10}}>Your recycling contributions for November:</Text>
          <Surface style={{width:270 , justifyContent: "center", alignItems:"center", padding:10, borderRadius:10}}>
          <Streak data={commitsData} />
          </Surface>
        </Surface>
        <Surface style={{width:"100%", alignItems:"center", justifyContent: "center", padding:10, borderRadius:10}}>
          <Text style={{width:"100%", fontSize:20, marginBottom:10}}>Your Most Recycled Item:</Text>
          <Image style={{
              width: 150,
              height: 150,
              marginBottom: 20,
              borderRadius: 100,
              border: "5px solid #6DA99A",
            }} source={{uri: "https://groceries.morrisons.com/images-v3/4b85987b-1398-4173-a0c1-3546047c9d74/ad3bbebf-cdbb-4b36-8a70-71dd4b5ada8b/500x500.jpg"}}></Image>
        </Surface>
        
      </BaseLayout>
    </ScrollView>
  );
}
