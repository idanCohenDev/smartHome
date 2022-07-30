import { View, Text, StyleSheet } from "react-native";
import { Pressable } from "react-native";

function RoomBox({ id, name, color, moveToRoom }) {
  
  return (
    <Pressable onPress={() => moveToRoom(id)}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 12,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default RoomBox;
