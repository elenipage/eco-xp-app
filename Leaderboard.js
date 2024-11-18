import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Leaderboard() {
  const insets = useSafeAreaInsets()
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
        <Text>Leaderboard</Text>
      </View>
    );
  }

