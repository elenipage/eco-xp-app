import React from "react";
import { HomeScreen } from "../pages/Home";
import { LeaderboardPage } from "../pages/LeaderboardPage";
import { Scanner } from "../pages/Scanner";
import { Help } from "../pages/Help";
import { Stats } from "../pages/Stats";
import { BottomNavigation } from "react-native-paper";

function Tabs() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: "home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "stats",
      focusedIcon: "chart-box",
      unfocusedIcon: "chart-box-outline",
    },
    {
      key: "scanner",
      focusedIcon: "barcode-scan",
    },
    {
      key: "leaderboard",
      focusedIcon: "trophy",
      unfocusedIcon: "trophy-outline",
    },
    {
      key: "help",
      focusedIcon: "help",
      unfocusedIcon: "help-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    stats: Stats,
    scanner: Scanner,
    leaderboard: LeaderboardPage,
    help: Help,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled={false}
    />
  );
}

export default Tabs;
