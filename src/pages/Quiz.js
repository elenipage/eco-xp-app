import { StyleSheet, Text, View } from "react-native";
import quizData from "../components/data/quizData";
import { Button } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { QuizCard } from "../components/QuizCard";

export function Quiz({ route }) {

  const insets = useSafeAreaInsets();

  const { xp, setXp } = route.params;
  const [quizQuestion, setQuizQuestion] = useState(1)

  function handlePress() {
    setXp((currentXp) => {
      return currentXp + 1;
    });
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {quizData.map((question) => {
        return <QuizCard question={question} setXp={setXp}/>
      })}
      <Button onPress={handlePress}>Press to increase your XP</Button>
    </View>
  );
}
