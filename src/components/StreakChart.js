import { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
    ContributionGraph,
} from "react-native-chart-kit";
import { streakData } from './data/streakData';

const screenWidth = Dimensions.get('window').width

export default function Streak(props) {
    const {data} = props
    
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const today_formatted = yyyy + "-" + mm + "-" + dd;

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 30,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 10) => `rgba(121, 194, 39, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false 
  };
  return (
    
  <ContributionGraph
  values={data}
  endDate={today}
  numDays={30}
  width={250}
  height={350}
  chartConfig={chartConfig}
  showOutOfRangeDays={false}
  squareSize={35}
/>

  )
}
