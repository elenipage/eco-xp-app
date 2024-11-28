import { useEffect, useState } from "react";
import { fetchFollowingByUserID } from "../../utils/api";
import { Loader } from "../components/Loader";
import { List } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useUser } from "../context/user-context";
import { useTheme } from "react-native-paper";

export function Following() {
  const { user } = useUser();
  const route = useRoute();
  const navigation = useNavigation();
  const { user_id } = route.params;
  const [following, setFollowing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {colors} = useTheme()

  useEffect(() => {
    setIsLoading(true);
    fetchFollowingByUserID(user_id).then((following) => {
      setFollowing(following);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
      <View style={{ width: "100%", height:"100%", backgroundColor: colors.background , padding: 10 }}>
        <List.Section
          style={{
            width: "100%",
          }}
        >
          {following.map((followee, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  followee.follower_user_id !== user.user_id
                    ? navigation.navigate("Other Profile", {
                        user_id: followee.follower_user_id,
                      })
                    : null;
                }}
              >
                <List.Item
                  style={{
                    backgroundColor: colors.surface,
                    marginBottom: 10,
                    paddingLeft: 10,
                    borderRadius: 100,
                  }}
                  title={followee.follower_user_id === user.user_id ? followee.username + " (you)" : followee.username}
                  left={() => (
                    <Avatar.Image
                      size={40}
                      source={{
                        uri: followee.avatar_img_url,
                      }}
                    />
                  )}
                  right={() => <Text>{followee.xp} XP</Text>}
                />
              </TouchableOpacity>
            );
          })}
        </List.Section>
      </View>
  );
}
