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
import { useTheme } from "react-native-paper";

import {
  fetchFollowersByUserID,
  fetchFollowingByUserID,
  fetchUserByID,
  fetchLoggedItemsById,
} from "../../utils/api";

export function OtherProfile(currentUserId, otherUserId) {
  const route = useRoute();
  const { user_id } = route.params;
  const [otherUser, setOtherUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [singleFollowerLineChartData, setSingleFollowerLineChartData] =
    useState(null);
  const { colors } = useTheme()

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
  start.subtractDays(7);
  const dd_30 = String(start.getDate()).padStart(2, "0");
  const mm_30 = String(start.getMonth() + 1).padStart(2, "0");
  const yyyy_30 = today.getFullYear();
  start = yyyy_30 + "-" + mm_30 + "-" + dd_30;

  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0.2);
    fetchUserByID(user_id)
      .then((data) => {
        setLoadingProgress(0.4);
        setOtherUser(data);
        return fetchLoggedItemsById(user_id, start, today_formatted);
      })
      .then((loggedItems) => {
        const loggedItemCount = {};
        const sortedLoggedItems = loggedItems.sort((item1, item2) => {
          const date1 = new Date(item1.date);
          const date2 = new Date(item2.date);
          return date1 - date2;
        });

        sortedLoggedItems.forEach((loggedItem) => {
          const date = loggedItem.date.split("T")[0];
          if (!loggedItemCount[date]) {
            loggedItemCount[date] = 1;
          } else {
            loggedItemCount[date]++;
          }
        });
        const loggedItemArray = [];

        for (key in loggedItemCount) {
          loggedItemArray.push({ date: key, count: loggedItemCount[key] });
        }
        return fetchFollowersByUserID(user_id);
      })
      .then((followers) => {
        setFollowerCount(followers.length);
        setLoadingProgress(0.8);
        return fetchFollowingByUserID(user_id);
      })
      .then((following) => {
        setFollowingCount(following.length);
      })
      .then(() => {
        return singleFollowerLineChart(user_id);
      })
      .then((data) => {
        setSingleFollowerLineChartData(data);
        setLoadingProgress(1);
        setIsLoading(false);
      });
  }, [user_id]);

  if (isLoading) {
    return <Loader loadingProgress={loadingProgress} />;
  }

  return (
    <ScrollView>
      <BaseLayout>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingTop: 20,
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
            backgroundColor: colors.surface
          }}
        >
          <Text style={{ width: "100%", fontSize: 20, marginBottom: 10 }}>
            {otherUser.first_name} - {otherUser.xp} XP
          </Text>
          <Text style={{ width: "100%", fontSize: 16, marginBottom: 10 }}>
            Weekly Progress
          </Text>
          <View
            style={{
              width: 330,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 20,
              backgroundColor: "white",
              borderWidth: 4,
              borderColor: colors.secondary,
            }}
          >
            {singleFollowerLineChartData ? (
              <Line data={singleFollowerLineChartData} />
            ) : null}
          </View>
        </Surface>
        <Surface
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            borderRadius: 10,
            marginBottom: 25,
            backgroundColor: colors.surface
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
              borderWidth: 4,
              borderColor: colors.primary,
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
