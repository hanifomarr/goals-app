import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItems = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalList}>
        <Text style={styles.goalItems}>{props.text}</Text>
      </View>
    </Pressable>
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
