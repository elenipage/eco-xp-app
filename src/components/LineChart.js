import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get('window').width

export default function Line(props) {
    const {data} = props

  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(72, 61, 139, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(72, 61, 139, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }

  return (
  <LineChart
  data={data}
  width={screenWidth}
  height={300}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
  fromZero={true}
  yAxisSuffix=" xp"
/>
  );
}
