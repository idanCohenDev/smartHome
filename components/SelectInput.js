import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";
import {useState} from "react"

function SelectInput({ onChange, items , placeholder }) {

const [focus, setFocus] = useState(false)

  return (
    <View style={[styles.selectContainer, focus && styles.selectContainerFocus]}>
      <RNPickerSelect
        onValueChange={(value) => onChange(value)}
        items={items}
        placeholder={{ label: `Select a ${placeholder}...`, value: null }}
        placeholderColor="#888"
        onOpen={() => setFocus(true)}
        onClose={() => setFocus(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectContainer: {
    width: "80%",
    paddingBottom: 8,
    marginVertical: 24,
    borderBottomWidth: 2, 
    borderColor: "#371B58"
  },
  selectContainerFocus: {
    borderBottomWidth: 3, 
    marginBottom: 23
  }
});

export default SelectInput;
