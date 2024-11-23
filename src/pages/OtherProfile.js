import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BaseLayout from "../components/BaseLayout";
import { FollowersFollowing } from "../components/FollowersFollowing";
import { Surface } from "react-native-paper";
import Line from "../components/LineChart";
import { singleFollowerLineChart } from "../components/data/lineChartData";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { Loader } from "../components/Loader";

import { fetchFollowersByUserID, fetchFollowingByUserID, fetchUserByID } from "../../utils/api";


export function OtherProfile() {
  const route = useRoute();
  const { user_id } = route.params;
  console.log(user_id);
  const [otherUser, setOtherUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetchUserByID(user_id)
      .then((data) => {
        setOtherUser(data);
      })
      .then(() => {
        fetchFollowersByUserID(user_id)
          .then((followers) => {
            setFollowerCount(followers.length);
          })
          .then(() => {
            fetchFollowingByUserID(user_id).then((following) => {
              setFollowingCount(following.length);
              setIsLoading(false);
            });
          });
      });
  }, []);

  if (isLoading) {return <Loader/>}


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
              uri: otherUser.avatar_img_url,
            }}
          />
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 25, marginBottom: 10 }}>
              {otherUser.username}
            </Text>
            <FollowersFollowing
              user_id={user_id}
              followerCount={followerCount}
              followingCount={followingCount}
            />
          </View>
        </View>
        <Surface
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <Text style={{ width: "100%", fontSize: 20, marginBottom: 10 }}>
            {otherUser.first_name} - {otherUser.xp} XP
          </Text>
          <Text style={{ width: "100%", fontSize: 16, marginBottom: 10 }}>
            Weekly Progress
          </Text>
          <Surface
            style={{
              width: 320,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Line data={singleFollowerLineChart(otherUser)} />
          </Surface>
        </Surface>
        <Surface
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ width: "100%", fontSize: 20, marginBottom: 10 }}>
            {otherUser.first_name}'s Most Recycled Item:
          </Text>
          <Image
            style={{
              width: 150,
              height: 150,
              marginBottom: 20,
              borderRadius: 100,
              border: "5px solid #6DA99A",
            }}
            source={{
              uri: "https://assets.sainsburys-groceries.co.uk/gol/7964615/1/640x640.jpg",
            }}
          ></Image>
        </Surface>
      </BaseLayout>
    </ScrollView>
  );
}
