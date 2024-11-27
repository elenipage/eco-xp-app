import { Platform, View, Text, ScrollView, StyleSheet, Image } from "react-native";
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
          alignItems: "center",
          justifyContent: "center",
          paddingTop: Platform.OS === "ios" ? insets.top : 0,
          paddingBottom: Platform.OS === "ios" ? insets.bottom : 0,
          margin: 20,
        }}
      >
        <SegButtons
          value={value}
          setValue={setValue}
        />
        {value === "friends" ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Pie data={friendsPie} />
            <Surface
              elevation={2}
              style={styles.infoCard}
            >
              <Image
                source={require("../../assets/cute-plastic-bottle.png")}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "contain",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  padding: 20,
                  fontSize: 18,
                }}
              >
                The item you and your followers recycled most this month:
              </Text>
            </Surface>
            <Surface
              elevation={2}
              style={styles.infoCard}
            >
              <Image
                source={require("../../assets/happy-bin.png")}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "contain",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                You and your friends recycled 50 bottles of water this week!
              </Text>
            </Surface>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  margin: 20,
                  fontSize: 18,
                }}
              >
                Your follower's total XP this week:
              </Text>

              <Line data={followersLineChart} />
            </View>
          </View>
        ) : value === "postcode" ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Pie data={postcodePie} />
            <Surface
              elevation={2}
              style={styles.infoCard}
            >
              <Image
                source={require("../../assets/cute-plastic-bottle.png")}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "contain",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  padding: 20,
                  fontSize: 18,
                }}
              >
                The most recycled item in your postcode:
              </Text>
            </Surface>
            <Surface
              elevation={2}
              style={styles.infoCard}
            >
              <Image
                source={require("../../assets/happy-bin.png")}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "contain",
                }}
              />
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
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Pie data={areaPie} />
            <Surface
              elevation={2}
              style={styles.infoCard}
            >
              <Image
                source={require("../../assets/cute-plastic-bottle.png")}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "contain",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  padding: 20,
                  fontSize: 18,
                }}
              >
                The most recycled item in your city:
              </Text>
            </Surface>
            <Surface
              elevation={2}
              style={styles.infoCard}
            >
              <Image
                source={require("../../assets/happy-bin.png")}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "contain",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                Together, your city recycled 2 tons of plastic this week!
              </Text>
            </Surface>

            <Text
              style={{
                textAlign: "center",
                margin: 20,
                fontSize: 18,
              }}
            >{`Your city's total XP this week:`}</Text>
            <Line data={areaLineChart} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoCard: {
    marginTop: 20,
    padding: 20,
    // height: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    border: "hidden",
    borderRadius: 20,
  },
});
