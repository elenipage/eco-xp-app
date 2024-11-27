import React from "react";
import { View, Image } from "react-native";
import { useState, useEffect } from "react";
import {
  postcodeData,
  areaData,
  followingData,
} from "../components/data/leaderboardData";
import { Surface, Text } from "react-native-paper";
import { useUser } from "../context/user-context";
import { Loader } from "../components/Loader";
import TestLayout from "../styles/TestLayout";
import SegButtons from "../components/SegButtons";
import { LeaderboardCard } from "../components/LeaderboardCard";

function LeaderboardHeader(leaderBoard, user) {
  const name = user.username;
  let userPosition = 0;
  leaderBoard.forEach((position, index) => {
    if (position.username === name) {
      userPosition = index + 1;
    }
  });

  return (
    <Surface
      elevation={1}
      style={{
        padding: 8,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      <Text variant="headlineLarge">Leaderboard</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{ width: 150, alignItems: "center", justifyContent: "center" }}
        >
          <Text variant="headlineLarge">
            {userPosition}
            {userPosition === 1
              ? "st"
              : userPosition === 2
              ? "nd"
              : userPosition === 3
              ? "rd"
              : "th"}
          </Text>
        </View>

        <Image
          style={{
            width: 100,
            height: 100,
            marginBottom: 20,
            borderRadius: 100,
            border: "5px solid #6DA99A",
          }}
          source={{
            uri: user.avatar_img_url,
          }}
        />
        <View
          style={{ width: 150, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            variant="bodyLarge"
          >
            {user.xp} XP
          </Text>
        </View>
      </View>
    </Surface>
  );
}

export function LeaderboardPage() {
  const [value, setValue] = useState("friends");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0.1);
    Promise.all([followingData(user), postcodeData(user), areaData(user)])
      .then(([followingResult, postcodeResult, areaResult]) => {
        setLoadingProgress(0.3);
        followingResult.push({
          username: user.username,
          avatarUrl: user.avatar_img_url,
          xp: user.xp,
        });
        const followersSorted = followingResult.sort((b, a) => a.xp - b.xp);
        const postcodeSorted = postcodeResult.sort((b, a) => a.xp - b.xp);
        const areaSorted = areaResult.sort((b, a) => a.xp - b.xp);
        setLoadingProgress(0.6);
        return Promise.all([followersSorted, postcodeSorted, areaSorted]);
      })
      .then(([followersSorted, postcodeSorted, areaSorted]) => {
        setData({
          friends: followersSorted,
          postcode: postcodeSorted,
          area: areaSorted,
        });
        setLoadingProgress(1);
        setTimeout(() => setIsLoading(false), 500);
      });
  }, []);

  if (isLoading) {
    return <Loader loadingProgress={loadingProgress} />;
  }

  return (
    <View style={TestLayout.container}>
      {value === "friends"
        ? LeaderboardHeader(data.friends, user)
        : value === "postcode"
        ? LeaderboardHeader(data.postcode, user)
        : LeaderboardHeader(data.area, user)}
      <SegButtons value={value} setValue={setValue} />

      {value === "friends" ? (
        <LeaderboardCard data={data.friends} />
      ) : value === "postcode" ? (
        <LeaderboardCard data={data.postcode} />
      ) : (
        <LeaderboardCard data={data.area} />
      )}
    </View>
  );
}
