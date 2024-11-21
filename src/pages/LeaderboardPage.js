import React from "react";
import { Text, View, Image } from "react-native";
import SegButtons from "../components/SegButtons";
import TestLayout from "../styles/TestLayout";
import { useState } from "react";
import { LeaderboardCard } from "../components/LeaderboardCard";
import {
  followersData,
  postcodeData,
  areaData,
} from "../components/data/leaderboardData";
import { Surface } from "react-native-paper";

const user = {
  userName: "Louis",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4E03AQHp3QR7NwD02w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715085387323?e=1737590400&v=beta&t=cMjFvIwY5d0XCGXUKpdbP9IkEXuIP2IcjGQDEL21lRU",
  xp: 88,
};

function LeaderboardHeader(leaderBoard) {
  const name = user.userName;
  let userPosition = 0;
  leaderBoard.forEach((position, index) => {
    if (position.userName === name) {
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
            uri: "https://media.licdn.com/dms/image/v2/D4E03AQHp3QR7NwD02w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715085387323?e=1737590400&v=beta&t=cMjFvIwY5d0XCGXUKpdbP9IkEXuIP2IcjGQDEL21lRU",
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
  const followersSorted = followersData.sort((b, a) => a.xp - b.xp);
  const postcodeSorted = postcodeData.sort((b, a) => a.xp - b.xp);
  const areaSorted = areaData.sort((b, a) => a.xp - b.xp);

  const [value, setValue] = useState("friends");

  return (
    <View style={TestLayout.container}>
      {value === "friends"
        ? LeaderboardHeader(followersSorted)
        : value === "postcode"
        ? LeaderboardHeader(postcodeSorted)
        : LeaderboardHeader(areaSorted)}
      <SegButtons value={value} setValue={setValue} />

      {value === "friends" ? (
        <LeaderboardCard data={followersData} />
      ) : value === "postcode" ? (
        <LeaderboardCard data={postcodeData} />
      ) : (
        <LeaderboardCard data={areaData} />
      )}
    </View>
  );
}
