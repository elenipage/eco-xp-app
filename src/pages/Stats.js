import { Platform, View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SegButtons from "../components/SegButtons";

import { useState } from "react";
import Pie from "../components/Pie";
import { friendsPie, postcodePie, areaPie } from "../components/data/pie-data";
import { Surface } from "react-native-paper";
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
        <Text style={{ fontSize: 40 }}>Stats</Text>
        <SegButtons
          value={value}
          setValue={setValue}
        />
        {value === "friends" ? (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Pie data={friendsPie} />
            <Surface
              elevation={1}
              style={{
                marginTop: 15,
                margin: 10,
                padding: 8,
                height: 100,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "hidden",
                borderRadius: 20,
              }}
            >
              <Text style={{ textAlign: "center", marginBottom: 5, fontSize: 18 }}>
                The item you and your followers recycled most this month:
              </Text>
            </Surface>
            <Surface
              elevation={1}
              style={{
                margin: 5,
                padding: 8,
                height: 100,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "hidden",
                borderRadius: 20,
              }}
            >
              <Text style={{ textAlign: "center", marginBottom: 5, fontSize: 18 }}>
                You and your friends recycled 50 bottles of water this week!
              </Text>
            </Surface>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ textAlign: "center", margin: 20, fontSize: 18 }}>
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
                margin: 5,
                padding: 8,
                height: 100,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "hidden",
                borderRadius: 20,
              }}
            >
              <Text style={{ textAlign: "center", marginBottom: 5, fontSize: 18, width: "80%" }}>
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
              <Text style={{ textAlign: "center", marginBottom: 5, fontSize: 18 }}>
                Within your postcode, you recycled enough glass to build 5 greenhouses!
              </Text>
            </Surface>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ textAlign: "center", margin: 20, fontSize: 18 }}>
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
              <Text style={{ textAlign: "center", marginBottom: 5, fontSize: 18 }}>
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
              <Text style={{ textAlign: "center", marginBottom: 5, fontSize: 18 }}>
                Together, your city recycled 2 tons of plastic this week!
              </Text>
            </Surface>

            <Text style={{ margin: 20, fontSize: 18 }}>{`Your city's total XP this week:`}</Text>
            <Line data={areaLineChart} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
