import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function FAQ() {
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
        <Text>FAQ</Text>
      </View>
    );
}
  

// Scrollview => surface => Text
// Map through Q and A and put them on separate "surfaces" (native paper)
// Additional styling - inline, StyleSheet.create, or external file
