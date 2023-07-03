import { StyleSheet, Text, View } from "react-native";

const GoalItems = (props) => {
  return (
    <View style={styles.goalList}>
      <Text style={styles.goalItems}>{props.text}</Text>
    </View>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  goalList: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  goalItems: {
    color: "white",
  },
});
