import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
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
import { useTheme } from "react-native-paper";

export function Stats() {
  const [value, setValue] = useState("friends");
  const { colors, fonts, surface } = useTheme();

  const styles = StyleSheet.create({
    infoCard: {
      marginVertical: 10,
      padding: 20,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      border: "hidden",
      borderRadius: 20,
      backgroundColor: colors.surface,
    },
  });

  return (
    <ScrollView>
      <Surface
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: colors.surface,
        }}
      >
        <Text
          style={{
            ...fonts.displayMedium,
            marginBottom: 10,
            color: colors.onSurface,
          }}
        >
          Stats
        </Text>
        <SegButtons value={value} setValue={setValue} />
      </Surface>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          margin: 20,
        }}
      >
        {value === "friends" ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Pie data={friendsPie} />
            <Surface elevation={2} style={styles.infoCard}>
              <Text
                style={{
                  textAlign: "center",
                  paddingBottom: 20,
                  fontSize: 18,
                }}
              >
                The item you and your followers recycled most this month:
              </Text>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginBottom: 10,
                  borderRadius: 100,
                  borderWidth: 4,
                  borderColor: colors.secondary,
                }}
                source={{
                  uri: "https://assets.sainsburys-groceries.co.uk/gol/2060859/1/1500x1500.jpg",
                }}
              ></Image>
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
                  marginTop: 20,
                  fontSize: fonts.titleLarge.fontSize,
                }}
              >
                Your followers total XP this week:
              </Text>

              <View
                style={{
                  padding: 20,
                  margin: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  borderWidth: 4,
                  borderColor: colors.primary,
                  paddingTop: 40,
                  paddingRight: 20,
                  backgroundColor: "white",
                }}
              >
                <Line data={followersLineChart} />
              </View>
            </View>
            <Surface elevation={2} style={styles.infoCard}>
            <Image
                source={require("../../assets/cute-plastic-bottle.png")}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "contain",
                  marginBottom: 20
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
            <Surface elevation={2} style={styles.infoCard}>
              <Text
                style={{
                  textAlign: "center",
                  paddingBottom: 20,
                  fontSize: 18,
                }}
              >
                The most recycled item in your postcode:
              </Text>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginBottom: 10,
                  borderRadius: 100,
                  borderWidth: 4,
                  borderColor: colors.secondary,
                }}
                source={{
                  uri: "https://assets.sainsburys-groceries.co.uk/gol/3300763/1/1500x1500.jpg",
                }}
              ></Image>
            </Surface>
            <Text
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  fontSize: fonts.titleLarge.fontSize,
                }}
              >
                Your postcode's total XP this week:
              </Text>
              <View
                style={{
                  padding: 20,
                  margin: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  borderWidth: 4,
                  borderColor: colors.primary,
                  paddingTop: 40,
                  paddingRight: 20,
                  backgroundColor: "white",
                }}
              >
                <Line data={postcodeLineChart} />
              </View>
            <Surface elevation={2} style={styles.infoCard}>
              <Image
                source={require("../../assets/happy-bin.png")}
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "contain",
                }}
              />
              <Text
                style={{ textAlign: "center", marginBottom: 5, fontSize: 18 }}
              >
                Within your postcode, you recycled enough glass to build 5
                greenhouses!
              </Text>
            </Surface>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
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
            <Surface elevation={2} style={styles.infoCard}>
              <Text
                style={{
                  textAlign: "center",
                  paddingBottom: 20,
                  fontSize: 18,
                }}
              >
                The most recycled item in your city:
              </Text>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginBottom: 10,
                  borderRadius: 100,
                  borderWidth: 4,
                  borderColor: colors.secondary,
                }}
                source={{
                  uri: "https://assets.sainsburys-groceries.co.uk/gol/7736185/1/1500x1500.jpg",
                }}
              ></Image>
            </Surface>
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                fontSize: fonts.titleLarge.fontSize,
              }}
            >{`Your city's total XP this week:`}</Text>
            <View
              style={{
                padding: 20,
                margin: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                borderWidth: 4,
                borderColor: colors.primary,
                paddingTop: 40,
                paddingRight: 20,
                backgroundColor: "white",
              }}
            >
              <Line data={areaLineChart} />
            </View>
            <Surface elevation={2} style={styles.infoCard}>
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
          </View>
        )}
      </View>
    </ScrollView>
  );
}
