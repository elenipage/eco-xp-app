import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import quizzes from "../components/data/quizData";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { updateXpByID } from "../../utils/api";
import { useUser } from "../context/user-context";
import { Button, Surface } from "react-native-paper";
import { useTheme, Text } from "react-native-paper";


export function Quiz({ route }) {
  const { xp, setXp } = route.params;
  const [localXp, setLocalXp] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigation = useNavigation();
  const { user } = useUser();
  const { colors, fonts, surface } = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.secondaryContainer,
      padding: 20,
      margin: 5,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },
    page: {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      backgroundColor: colors.background,
    },
    container: {
      justifyContent: "space-evenly",
      alignItems: "center",
      paddingBottom: 15,
      borderRadius: 35,
      backgroundColor: colors.surfaceVariant,
      marginHorizontal: 20,
      marginBottom: 20,
      width: "90%",
      height: "70%",
    },
    text: {
      fontSize: fonts.headlineSmall.fontSize,
      textAlign: "center",
      color: "#3EAE6A",
    },
    feedback: {
      fontSize: fonts.headlineSmall.fontSize,
      fontWeight: "bold",
      color: colors.onTertiaryContainer,
      textAlign: "center",
      marginBottom: 10,
    },
    correctAnswer: {
      fontSize: 16,
      fontStyle: "italic",
      color: colors.onTertiaryContainer,
      textAlign: "center",
      marginBottom: 15,
    },
    quizCompleteText: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
    },
    totalXpText: {
      fontSize: 20,
      textAlign: "center",
    },
    feedbackBox: {
      padding: 20,
      marginHorizontal: 20,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      minHeight: 250,
      minWidth: 250,
    },
  });

  useEffect(() => {
    const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    setSelectedQuiz(randomQuiz);
  }, []);

  const currentQuestion = selectedQuiz[currentQuestionIndex];

  function handleAnswer(isCorrect, xpReward) {
    if (isCorrect) {
      updateXpByID(user.user_id, Number(xpReward)).then(() => {
        setXp((prevXp) => prevXp + Number(xpReward));
        setLocalXp((prevLocal) => prevLocal + Number(xpReward));
        setFeedback("Correct! 🎉");
      });
    } else {
      setFeedback("Incorrect. 😞");
      setShowAnswer(true);
    }
  }

  function handleNext() {
    setFeedback(null);
    setShowAnswer(false);
    if (currentQuestionIndex < selectedQuiz.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  }

  if (!selectedQuiz.length) {
    return (
      <View>
        <Text>Loading quiz...</Text>
      </View>
    );
  }

  if (quizCompleted) {
    return (
      <View style={styles.page}>
        <Image
          style={{
            width: 200,
            height: 200,
            marginBottom: 20,
            borderRadius: 70,
            borderColor: colors.secondary,
            borderWidth: 3,
          }}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/007/410/214/non_2x/team-business-holding-plants-cooperation-nature-on-earth-day-conservation-eco-friendly-ecology-esg-or-ecology-problem-concept-illustration-vector.jpg",
          }}
        />
        <Text variant="bodySmall">Quiz Complete!</Text>
        <Text variant="bodySmall">Total XP: {localXp}</Text>
        <Button onPress={() => navigation.navigate("Main")}>
          Return to Home
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View>
          <Surface style={surface}>
            <Text variant="bodySmall">Question {currentQuestion.id}:</Text>
            <Text variant="bodySmall">{currentQuestion.question}</Text>
          </Surface>
        </View>

        {feedback ? (
          <View style={styles.feedbackBox}>
            <Text variant="bodySmall">{feedback}</Text>
            {showAnswer && (
              <Text variant="bodySmall">
                The correct answer is:{" "}
                {
                  currentQuestion.options.find((option) => option.isCorrect)
                    .text
                }
              </Text>
            )}
            <Button
              style={{ backgroundColor: colors.background }}
              onPress={handleNext}
            >
              Next
            </Button>
          </View>
        ) : (
          <View style={{ marginHorizontal: 20 }}>
            {currentQuestion.options.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() =>
                  handleAnswer(option.isCorrect, currentQuestion.xpReward)
                }
              >
                <Surface style={styles.button}>
                  <Text>
                    {option.id}. {option.text}
                  </Text>
                </Surface>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
