import { useEffect, useState } from "react";
import { fetchFollowingByUserID } from "../../utils/api";
import { LoadingPage } from "./LoadingPage";
import { List } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export function Following() {
  const route = useRoute();
  const navigation = useNavigation()
  const { user_id } = route.params;
  const [following, setFollowing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchFollowingByUserID(user_id).then((following) => {
      setFollowing(following);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ScrollView>
      <View style={{ width: "100%", padding: 10 }}>
        <List.Section
          style={{
            width: "100%",
          }}
        >
          {following.map((followee, index) => {
            console.log(followee);
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("Other Profile", {
                    user_id: followee.follower_user_id,
                  });
                }}
              >
                <List.Item
                  style={{
                    backgroundColor: "white",
                    marginBottom: 10,
                    paddingLeft: 10,
                    borderRadius: 100,
                  }}
                  title={followee.username}
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
    </ScrollView>
  );
}
