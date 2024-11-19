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
    { key: "home", title: "Home", focusedIcon: "home", unfocusedIcon: "home-outline" },
    { key: "stats", title: "Stats", focusedIcon: "chart-box", unfocusedIcon: "chart-box-outline" },
    { key: "scanner", title: "Scanner", focusedIcon: "barcode-scan" },
    { key: "leaderboard", title: "Leaderboard", focusedIcon: "trophy", unfocusedIcon: "trophy-outline" },
    { key: "help", title: "Help", focusedIcon: "account-cowboy-hat", unfocusedIcon: "account-cowboy-hat-outline" },
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
    />
  );
}

export default Tabs;
