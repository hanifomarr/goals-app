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
import GoalItems from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goalItem, setgoalItems] = useState([]);

  function changeModalVisible() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setgoalItems((currentGoalItems) => [
      ...currentGoalItems,
      { data: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function deleteItemHandler(id) {
    setgoalItems((currentGoalItems) => {
      return currentGoalItems.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Add new Goal" onPress={changeModalVisible} />
      <GoalInput
        onAddGoal={addGoalHandler}
        onChangeModalVisible={modalVisible}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainers}>
        <FlatList
          data={goalItem}
          renderItem={(itemGoal) => {
            return (
              <GoalItems
                text={itemGoal.item.data}
                onDeleteItem={deleteItemHandler}
                id={itemGoal.item.id}
              />
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
  goalsContainers: {
    flex: 5,
  },
});
