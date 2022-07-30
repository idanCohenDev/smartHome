import {  Pressable, StyleSheet, Text } from "react-native";
import {useState} from "react"

function RoomItem({ item, toggleItem, id }) {

  const [isOn, setIsOn] = useState(item.on)

  const switchItem = () => {
    toggleItem(id)
    setIsOn(item.on)
  }

  return (
    <Pressable
      style={[styles.rootContainer, { backgroundColor: isOn ? "#5FD068" : "#F24C4C" }]}
      onPress={switchItem}
    >
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: "50%",
    alignItems: "center",
    padding: 12,
    borderRadius: 5, 
    marginVertical: 6
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default RoomItem;
