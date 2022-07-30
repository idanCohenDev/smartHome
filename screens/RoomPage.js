import { View, Text, StyleSheet, Button } from "react-native";
import { useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import RoomItem from "../components/RoomPage.js/RoomItem";
import SelectInput from "../components/SelectInput"

const itemsItems = [
  {label: "Boiler", value: "Boiler"},
  { label: "Air Conditioner", value: "Air Conditioner" },
  { label: "Stereo", value: "Stereo" },
  { label: "Lamp", value: "Lamp" },
]

function RoomPage({ room, navigation, addNewItem, toggleItem }) {

  const [shown, setShown] = useState(false);

  const [chosenItem, setChosenItem] = useState("");

  const onChangeItem = (item) => setChosenItem(item)

  navigation.setOptions({
    headerRight: () => (
      <Ionicons
        name="add"
        size={30}
        color="#371B58"
        onPress={() => setShown(!shown)}
      />
    ),
  });

  const itemsElements = room.items.map((item, index) => (
    <RoomItem toggleItem={toggleItem} key={index} item={item} id={index} />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Type: <Text style={styles.innerText}>{room.type}</Text>
      </Text>
      {shown && (
        <View style={styles.rootContainer}>
          <View style={styles.subContainer}>
            <SelectInput onChange={onChangeItem} items={itemsItems} placeholder="item" />
              <Button title="Add" color="#371B58" onPress={() => addNewItem(chosenItem)} />
          </View>
        </View>
      )}
      <View style={styles.itemsContainer}>{itemsElements}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    fontSize: 20,
  },
  innerText: {
    fontWeight: "bold",
  },
  rootContainer: {
    marginTop: 24,
  },
  subContainer: {
    width: "100%",
    alignItems: "center",
  },
  itemsContainer: {
    marginTop: 24,
    alignItems: "center"
  },
});

export default RoomPage;
