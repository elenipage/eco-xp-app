import { StyleSheet, Text, View, Image } from "react-native";
import Streak from "../components/StreakChart";
import { streakData } from "../components/data/streakData";
import { ScrollView } from "react-native-gesture-handler";
import BaseLayout from "../components/BaseLayout";
import { FollowersFollowing } from "../components/FollowersFollowing";
import { Surface } from "react-native-paper";
import { useUser } from "../context/user-context";
import { fetchFollowersByUserID, fetchFollowingByUserID } from "../../utils/api";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { useTheme } from "react-native-paper";

export function Profile() {
  const { colors } = useTheme();
  const { user } = useUser();
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0.1);
    fetchFollowersByUserID(user.user_id)
      .then((followers) => {
        setFollowerCount(followers.length);
        setLoadingProgress(0.3);
      })
      .then(() => {
        setLoadingProgress(0.9);
        fetchFollowingByUserID(user.user_id).then((following) => {
          setFollowingCount(following.length);
        });
      })
      .then(() => {
        streakData().then((response) => {
          setLogData(response);
          setLoadingProgress(1);
          setIsLoading(false);
        });
      });
  }, []);

  if (isLoading) return <Loader loadingProgress={loadingProgress} />;

  return (
    <ScrollView>
      <BaseLayout>
        <View
          style={{
            marginTop: 20,
            marginBottom: 5,
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
              marginTop: 5,
              borderRadius: 100,
              border: "5px solid #6DA99A",
            }}
            source={{
              uri: user.avatar_img_url,
            }}
          />
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 25, marginBottom: 10 }}>{user.username}</Text>
            <FollowersFollowing
              user_id={user.user_id}
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
            backgroundColor: colors.surface,
          }}
        >
          <Text style={{ width: "100%", fontSize: 20, marginBottom: 10 }}>
            Hi {user.first_name}!
          </Text>
          <Text style={{ width: "100%", fontSize: 16, marginBottom: 10 }}>
            Your recycling contributions for this month:
          </Text>
          <View
            style={{
              width: 270,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 20,
              backgroundColor: "white",
              borderWidth: 4,
              borderColor: colors.secondary,
            }}
          >
            <Streak data={logData} />
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
            backgroundColor: colors.surface,
          }}
        >
          <Text style={{ width: "100%", fontSize: 20, marginBottom: 10 }}>
            Your Most Recycled Item:
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
              uri: "https://groceries.morrisons.com/images-v3/4b85987b-1398-4173-a0c1-3546047c9d74/ad3bbebf-cdbb-4b36-8a70-71dd4b5ada8b/500x500.jpg",
            }}
          ></Image>
        </Surface>
      </BaseLayout>
    </ScrollView>
  );
}
