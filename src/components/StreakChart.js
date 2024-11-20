import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
    ContributionGraph,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get('window').width

export default function Streak(props) {
    const {data} = props
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 30,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 10) => `rgba(56, 182, 70, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false 
  };
  return (
    
  <ContributionGraph
  values={data}
  endDate={new Date("2024-11-30")}
  numDays={35}
  width={250}
  height={350}
  chartConfig={chartConfig}
  showOutOfRangeDays={false}
  squareSize={35}
/>

  )
}
