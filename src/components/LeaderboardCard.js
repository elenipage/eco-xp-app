import Leaderboard from "react-native-leaderboard";
import { View, Text } from "react-native";

export function LeaderboardCard({data}) {
    const props = {
        labelBy: "userName",
        sortBy: "xp",
        data: data,
        icon: "avatarUrl",
      };
  return (
    <View style={{ flex: 1, width:"90%"}}>
      <Leaderboard {...props} />
    </View>
  );
}
