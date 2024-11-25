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

import {
  fetchFollowersByUserID,
  fetchFollowingByUserID,
  fetchUserByID,
  fetchLoggedItemsById,
} from "../../utils/api";

export function OtherProfile() {
  const route = useRoute();
  const { user_id } = route.params;
  const [otherUser, setOtherUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loggedItems, setLoggedItems] = useState([]);

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const today_formatted = yyyy + "-" + mm + "-" + dd;
  Date.prototype.subtractDays = function (d) {
    this.setTime(this.getTime() - d * 24 * 60 * 60 * 1000);
    return this;
  };
  let start = new Date();
  start.subtractDays(1);
  const dd_30 = String(start.getDate()).padStart(2, "0");
  const mm_30 = String(start.getMonth() + 1).padStart(2, "0");
  const yyyy_30 = today.getFullYear();
  start = yyyy_30 + "-" + mm_30 + "-" + dd_30;
  // fetchLoggedItemsById(user_id, start, today_formatted).then((response) => {
  //   console.log(response, "response")
  // });

  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0.2);
    fetchUserByID(user_id)
      .then((data) => {
        setLoadingProgress(0.4);
        setOtherUser(data);
        return fetchLoggedItemsById(user_id);
      })
      .then((userLoggedItems) => {
        setLoggedItems(userLoggedItems);
        setLoadingProgress(0.6);
        return fetchFollowersByUserID(user_id);
      })
      .then((followers) => {
        setFollowerCount(followers.length);
        setLoadingProgress(0.8);
        return fetchFollowingByUserID(user_id);
      })
      .then((following) => {
        setFollowingCount(following.length);
        setLoadingProgress(1);
        setIsLoading(false);
      });
  }, [user_id]);
  // start.subtractDays(7);
  console.log(loggedItems);
  if (isLoading) {
    return <Loader loadingProgress={loadingProgress} />;
  }

  const itemData = loggedItems.map((item) => {
    console.log(item.xp, item.date);
  });

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
            <Text style={{ fontSize: 25, marginBottom: 10 }}>{otherUser.username}</Text>
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
          <Text style={{ width: "100%", fontSize: 16, marginBottom: 10 }}>Weekly Progress</Text>
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
