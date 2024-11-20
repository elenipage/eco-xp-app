import { StyleSheet, Text, View, Image } from "react-native";
import { Surface } from "react-native-paper";
import quizData from "./data/quizData";
import StandardButton from "./StandardButton";

export function QuizCard(props) {
    const {question, setXp} = props

    function handlePress(isCorrect, xpReward) {
        isCorrect ? setXp((currentXp, xpReward) => {
            return currentXp + xpReward
        }) : <Text>Sorry, that's incorrect</Text>
    }
  return (
        <Surface style={{width:"100%", alignItems:"center", justifyContent: "center", padding:10, borderRadius:10, marginBottom:20}}>
          <Text style={{width:"100%", fontSize:20, marginBottom:10}}>Question {question.id}</Text>
          <Text style={{width:"100%", fontSize:16, marginBottom:10}}>{question.question}</Text>
          {question.options.map((option) => {
            return <StandardButton buttonText={`${option.id}. ${option.text}`} tapFunction={handlePress(option[isCorrect], option[xpReward])}></StandardButton>
          })}
        </Surface>
        

  );
}
