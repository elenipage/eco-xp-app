import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useTheme } from "react-native-paper";

export default function Pie(props) {
  const { colors, fonts } = useTheme();

  const { data } = props;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  return (
    <PieChart
      data={data}
      width={Dimensions.get("window").width}
      height={200}
      chartConfig={chartConfig}
      accessor={"count"}
      backgroundColor={colors.background}
      paddingLeft={10}
      center={[0, 0]}
    />
  );
}
