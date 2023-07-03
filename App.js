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
  const [goalItem, setgoalItems] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setgoalItems((currentGoalItems) => [
      ...currentGoalItems,
      { data: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteItemHandler(id) {
    setgoalItems((currentGoalItems) => {
      return currentGoalItems.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
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
