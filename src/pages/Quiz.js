import { StyleSheet, Text, View, Image, Button } from "react-native";
import quizData from "../components/data/quizData";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import BaseLayout from "../components/BaseLayout";

export function Quiz({ route }) {
  const { xp, setXp } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [localXp, setLocalXp] = useState(xp);
  const navigation = useNavigation();

  const currentQuestion = quizData[currentQuestionIndex];

  function handleAnswer(isCorrect, xpReward) {
    if (isCorrect) {
      const newXp = localXp + Number(xpReward);
      setLocalXp(newXp);
      setXp(newXp);
      setFeedback("Correct! 🎉");
    } else {
      setFeedback("Incorrect. 😞");
      setShowAnswer(true);
    }
  }

  function handleNext() {
    setFeedback(null);
    setShowAnswer(false);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  }

  if (quizCompleted) {
    return (
      <View style={styles.centeredContainer}>
        <Image
          style={{
            width: 200,
            height: 200,
            marginBottom: 20,
            borderRadius:70
          }}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/007/410/214/non_2x/team-business-holding-plants-cooperation-nature-on-earth-day-conservation-eco-friendly-ecology-esg-or-ecology-problem-concept-illustration-vector.jpg",
          }}
        />
        <Text style={styles.quizCompleteText}>Quiz Complete!</Text>
        <Text style={styles.totalXpText}>Total XP: {localXp}</Text>
        <Button
          title="Return to Home"
          onPress={() => navigation.navigate("Main")}
        />
      </View>
    );
  }

  return (
    <ScrollView>
      <BaseLayout>
        <Text style={styles.text}>Question {currentQuestion.id}</Text>
        <Text style={styles.text}>{currentQuestion.question}</Text>

        {feedback ? (
          <View style={styles.centeredContainer}>
            <Text style={styles.feedback}>{feedback}</Text>
            {showAnswer && (
              <Text style={styles.correctAnswer}>
                The correct answer is:{" "}
                {
                  currentQuestion.options.find((option) => option.isCorrect)
                    .text
                }
              </Text>
            )}
            <Button title="Next Question" onPress={handleNext} />
          </View>
        ) : (
          currentQuestion.options.map((option) => (
            <Button
              key={option.id}
              title={`${option.id}. ${option.text}`}
              onPress={() =>
                handleAnswer(option.isCorrect, currentQuestion.xpReward)
              }
            />
          ))
        )}
      </BaseLayout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:150
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  feedback: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "blue",
    textAlign: "center",
  },
  correctAnswer: {
    fontSize: 16,
    fontStyle: "italic",
    color: "green",
    marginBottom: 20,
    textAlign: "center",
  },
  quizCompleteText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  totalXpText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});
