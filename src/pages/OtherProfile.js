import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseLayout from "../components/BaseLayout";
import { FollowersFollowing } from "../components/FollowersFollowing";
import { Surface } from "react-native-paper";
import Line from "../components/LineChart";
import { singleFollowerLineChart } from "../components/data/lineChartData";

export function OtherProfile() {
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
              uri: "https://avatar.iran.liara.run/public/63",
            }}
          />
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 25, marginBottom: 10 }}>JennyUser</Text>
            <FollowersFollowing />
          </View>
        </View>
        <Surface style={{width:"100%", alignItems:"center", justifyContent: "center", padding:10, borderRadius:10, marginBottom:20}}>
          <Text style={{width:"100%", fontSize:20, marginBottom:10}}>Jenny</Text>
          <Text style={{width:"100%", fontSize:16, marginBottom:10}}>Weekly Progress</Text>
          <Surface style={{width:320 , justifyContent: "center", alignItems:"center", padding:10, borderRadius:10}}>
          <Line data={singleFollowerLineChart}/>
          </Surface>
        </Surface>
        <Surface style={{width:"100%", alignItems:"center", justifyContent: "center", padding:10, borderRadius:10}}>
          <Text style={{width:"100%", fontSize:20, marginBottom:10}}>Jenny's Most Recycled Item:</Text>
          <Image style={{
              width: 150,
              height: 150,
              marginBottom: 20,
              borderRadius: 100,
              border: "5px solid #6DA99A",
            }} source={{uri: "https://assets.sainsburys-groceries.co.uk/gol/7964615/1/640x640.jpg"}}></Image>
        </Surface>
      </BaseLayout>
    </ScrollView>
  );
}
