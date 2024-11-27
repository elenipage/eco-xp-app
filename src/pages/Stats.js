import { Platform, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SegButtons from "../components/SegButtons";
import { useState } from "react";
import Pie from "../components/Pie";
import { friendsPie, postcodePie, areaPie } from "../components/data/pie-data";
import { Surface, Text } from "react-native-paper";
import Line from "../components/LineChart";
import {
  followersLineChart,
  postcodeLineChart,
  areaLineChart,
} from "../components/data/lineChartData";

export function Stats() {
  const [value, setValue] = useState("friends");
  const insets = useSafeAreaInsets();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: Platform.OS === "ios" ? insets.top : 0,
          paddingBottom: Platform.OS === "ios" ? insets.bottom : 0,
        }}
      >
        <Text variant="headlineMedium">Stats</Text>
        <SegButtons value={value} setValue={setValue} />
        {value === "friends" ? (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Pie data={friendsPie} />
            <Surface
              elevation={1}
              style={{
                margin: 20,
                padding: 8,
                height: 100,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "hidden",
                borderRadius: 20,
              }}
            >
              <Text
                variant="bodySmall"
              >
                The item you and your followers recycled most this month:
              </Text>
            </Surface>
            <Surface
              elevation={1}
              style={{
                margin: 20,
                padding: 8,
                height: 100,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "hidden",
                borderRadius: 20,
              }}
            >
              <Text
                variant="bodySmall"
              >
                You and your friends recycled 50 bottles of water this week!
              </Text>
            </Surface>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text variant="bodySmall">
                Your follower's total XP this week:
              </Text>
              <Line data={followersLineChart} />
            </View>
          </View>
        ) : value === "postcode" ? (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Pie data={postcodePie} />
            <Surface
              elevation={1}
              style={{
                margin: 20,
                padding: 8,
                height: 100,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "hidden",
                borderRadius: 20,
              }}
            >
              <Text
                variant="bodySmall"
              >
                The most recycled item in your postcode:
              </Text>
            </Surface>
            <Surface
              elevation={1}
              style={{
                margin: 20,
                padding: 8,
                height: 100,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "hidden",
                borderRadius: 20,
              }}
            >
              <Text
                variant="bodySmall"
              >
                Within your postcode, you recycled enough glass to build 5
                greenhouses!
              </Text>
            </Surface>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text variant="bodySmall">
                Your postcode's total XP this week:
              </Text>
              <Line data={postcodeLineChart} />
            </View>
          </View>
        ) : (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Pie data={areaPie} />
            <Surface
              elevation={1}
              style={{
                margin: 20,
                padding: 8,
                height: 100,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "hidden",
                borderRadius: 20,
              }}
            >
              <Text
                variant="bodySmall"
              >
                The most recycled item in your city:
              </Text>
            </Surface>
            <Surface
              elevation={1}
              style={{
                margin: 20,
                padding: 8,
                height: 100,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "hidden",
                borderRadius: 20,
              }}
            >
              <Text
                variant="bodySmall"
              >
                Together, your city recycled 2 tons of plastic this week!
              </Text>
            </Surface>

            <Text
              variant="bodySmall"
            >{`Your city's total XP this week:`}</Text>
            <Line data={areaLineChart} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
