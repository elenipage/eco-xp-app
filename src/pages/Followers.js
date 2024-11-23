import { useEffect, useState } from "react";
import { fetchFollowersByUserID } from "../../utils/api";
import { Loader } from "../components/Loader";
import { List } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export function Followers() {
  const route = useRoute();
  const { user_id } = route.params;
  const navigation = useNavigation();
  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchFollowersByUserID(user_id).then((followers) => {
      setFollowers(followers);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView>
      <View style={{ width: "100%", padding: 10 }}>
        <List.Section
          style={{
            width: "100%",
          }}
        >
          {followers.map((follower, index) => {
            console.log(follower);
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("Other Profile", {
                    user_id: follower.user_id,
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
                  title={follower.username}
                  left={() => (
                    <Avatar.Image
                      size={40}
                      source={{
                        uri: follower.avatar_img_url,
                      }}
                    />
                  )}
                  right={() => <Text>{follower.xp} XP</Text>}
                />
              </TouchableOpacity>
            );
          })}
        </List.Section>
      </View>
    </ScrollView>
  );
}
