import { View, Text, TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export function FollowersFollowing(props) {
  const { navigation } = useNavigation();
  const { followerCount, followingCount } = props;
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
            navigation.navigate("Followers");
          }}
        >
          <Text>Followers</Text>
          <Text>{followerCount}</Text>
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
            navigation.navigate("Following");
          }}
        >
          <Text>Following</Text>
          <Text>{followingCount}</Text>
        </TouchableOpacity>
      </Surface>
    </View>
  );
}
