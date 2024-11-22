import React from "react";
import { Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import {
  postcodeData,
  areaData,
  followingData,
} from "../components/data/leaderboardData";
import { Surface } from "react-native-paper";
import { useUser } from "../context/user-context";
import { LoadingPage } from "./LoadingPage";
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
      <Text style={{ fontSize: 40, margin: 20 }}>Leaderboard</Text>
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
          <Text style={{ fontSize: 40 }}>
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
            style={{
              fontSize: 30,
            }}
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
  const { user } = useUser();
  useEffect(() => {
    setIsLoading(true);
    Promise.all([followingData(user), postcodeData(user), areaData(user)])
      .then(([followingResult, postcodeResult, areaResult]) => {
        followingResult.push({
          username: user.username,
          avatarUrl: user.avatar_img_url,
          xp: user.xp,
        })
        console.log(followingResult)
        const followersSorted = followingResult.sort((b, a) => a.xp - b.xp);
        const postcodeSorted = postcodeResult.sort((b, a) => a.xp - b.xp);
        const areaSorted = areaResult.sort((b, a) => a.xp - b.xp);

        return Promise.all([followersSorted, postcodeSorted, areaSorted])
      })
      .then(([followersSorted, postcodeSorted, areaSorted]) => {
        setData({
          friends: followersSorted,
          postcode: postcodeSorted,
          area: areaSorted,
        });
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingPage />;
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
