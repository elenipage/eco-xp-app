import { View, TouchableOpacity } from "react-native";
import { Surface, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export function FollowersFollowing(props) {
  const navigation = useNavigation();
  const { user_id, followerCount, followingCount } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Surface
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Followers", {user_id: user_id});
          }}
        >
          <Text variant="bodySmall">Followers</Text>
          <Text variant="bodySmall">{followerCount}</Text>
        </TouchableOpacity>
      </Surface>
      <Surface
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Following", {user_id: user_id});
          }}
        >
          <Text variant="bodySmall">Following</Text>
          <Text variant="bodySmall">{followingCount}</Text>
        </TouchableOpacity>
      </Surface>
    </View>
  );
}
