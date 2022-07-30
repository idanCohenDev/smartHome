import { TextInput, View, StyleSheet, Button, Alert } from "react-native";
import { useState } from "react";
import SelectInput from "../components/SelectInput";

const typeItems = [
  { label: "Bedroom", value: "Bedroom" },
  { label: "Kitchen", value: "Kitchen" },
  { label: "Bathroom", value: "Bathroom" },
];

const colorItems = [
  { label: "aliceblue", value: "aliceblue" },
  { label: "antiquewhite ", value: "antiquewhite" },
  { label: "aqua ", value: "aqua" },
  { label: "aquamarine ", value: "aquamarine" },
  { label: "azure ", value: "azure" },
  { label: "beige ", value: "beige" },
  { label: "bisque ", value: "bisque" },
];

const AddRoomPage = ({ onPressHandler, navigation }) => {
  const [name, setName] = useState("");

  const [color, setColor] = useState("");

  const [type, setType] = useState("");

  const onChangeType = (type) => setType(type);

  const onChangeColor = (color) => setColor(color);

  const [focus, setFocus] = useState(false);

  const addRoomHandler = () => {
    if (name.length > 0 && name.length <= 5 && type) {
      onPressHandler(name, type, color);
    } else {
      Alert.alert(
        "Error",
        "Please check if the name is between 1-5 characters and that you've chosen a type.",
        [{ text: "Ok", style: "default" }]
      );
    }
    navigation.navigate("home");
  };

  return (
    <View style={styles.mainContainer}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={(text) => setName(text)}
          style={[styles.inputContainer, focus && styles.inputContainerFocus]}
          placeholder="Enter a name"
          clearTextOnFocus={true}
          placeholderTextColor="#888"
        />
      <SelectInput
        placeholder="type"
        onChange={onChangeType}
        items={typeItems}
      />
      <SelectInput
        placeholder="color"
        onChange={onChangeColor}
        items={colorItems}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Room" color="#371B58" onPress={addRoomHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 48,
    marginBottom: 24,
    width: "80%",
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderColor: "#371B58",
  },
  inputContainerFocus: {
    borderBottomWidth: 3,
    paddingBottom: 7,
  },
  buttonContainer: {
    marginTop: 24,
  },
});

export default AddRoomPage;
