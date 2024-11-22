import Leaderboard from "react-native-leaderboard";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function LeaderboardCard({data}) {
  const navigation = useNavigation();
    const props = {
        labelBy: "username",
        sortBy: "xp",
        data: data,
        icon: "avatarUrl",
        onRowPress: (item, index) => {
          navigation.navigate("Other Profile")
        },
        evenRowColor: "#edfcf9"
      };
  return (
    <View style={{ flex: 1, width:"90%"}}>
      <Leaderboard {...props} />
    </View>
  );
}
