import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setenteredGoalText] = useState("");
  function inputHandler(enterInputText) {
    setenteredGoalText(enterInputText);
  }

  function passInputHandler() {
    props.onAddGoal(enteredGoalText);
    setenteredGoalText("");
  }

  return (
    <Modal visible={props.onChangeModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={inputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goals" onPress={passInputHandler} />
          <Button title="Cancel" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF9C9",
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    margin: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 10,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
