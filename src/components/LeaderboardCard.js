import Leaderboard from "react-native-leaderboard";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/user-context";

export function LeaderboardCard({ data }) {
  const {user} = useUser();
  const navigation = useNavigation();
  const props = {
    labelBy: "username",
    sortBy: "xp",
    data: data,
    icon: "avatarUrl",
    onRowPress: (item, index) => {
      console.log(user, '<<user', item, '<<item')
      if (user.username === item.username) {
        navigation.navigate("Profile");
      } else {
        navigation.navigate("Other Profile", { user_id: item.id });
      }
    },
    evenRowColor: "#edfcf9",
  };
  return (
    <View style={{ flex: 1, width: "90%" }}>
      <Leaderboard {...props} />
    </View>
  );
}
