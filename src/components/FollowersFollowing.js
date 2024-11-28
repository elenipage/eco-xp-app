import { View, Text, TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";

export function FollowersFollowing(props) {
  const navigation = useNavigation();
  const { user_id, followerCount, followingCount } = props;
  const { colors } = useTheme()

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
          backgroundColor: colors.surface
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Followers", {user_id: user_id});
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
          backgroundColor: colors.surface
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Following", {user_id: user_id});
          }}
        >
          <Text>Following</Text>
          <Text>{followingCount}</Text>
        </TouchableOpacity>
      </Surface>
    </View>
  );
}
