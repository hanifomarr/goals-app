import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enterInput, setEnterInput] = useState("");
  const [enterGoal, setEnterGoal] = useState([]);
  function inputHandler(enterInputText) {
    setEnterInput(enterInputText);
  }

  function addGoalHandler() {
    setEnterGoal((currentEnterGoals) => [
      ...currentEnterGoals,
      { data: enterInput, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={inputHandler}
        />
        <Button title="Add Goals" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainers}>
        <FlatList
          data={enterGoal}
          renderItem={(itemGoal) => {
            return (
              <View style={styles.goalList}>
                <Text style={styles.goalText}>{itemGoal.item.data}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 10,
    padding: 8,
  },
  goalsContainers: {
    flex: 5,
  },
  goalList: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  goalText: {
    color: "white",
  },
});
