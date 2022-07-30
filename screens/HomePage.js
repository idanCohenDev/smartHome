import { View, StyleSheet, Pressable } from "react-native";
import { FlatList } from "react-native";
import RoomBox from "../components/HomePage/RoomBox";
import { Ionicons } from "@expo/vector-icons";

const HomePage = ({ navigation, rooms, chooseRoom }) => {
  
  const pressHandler = () => {
    navigation.navigate("addRoom");
  };

  const moveToRoom = (id) => {
    const chosenRoom = rooms.filter((room) => room.id === id);
    chooseRoom(chosenRoom[0]);
    navigation.navigate("roomPage");
  };

  const renderItem = ({ item }) => {
    return (
      <RoomBox
        id={item.id}
        name={item.name}
        color={item.color}
        type={item.type}
        moveToRoom={moveToRoom}
      />
    );
  };

  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          data={rooms}
          renderItem={renderItem}
          keyExtrctoar={(item) => item.id}
          numColumns={2}
        />
      </View>
      <Pressable onPress={pressHandler} style={styles.buttonContainer}>
        <Ionicons name="add-circle-sharp" size={72} color="#371B58" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  buttonContainer: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 30,
    right: 30,
  },
 
});

export default HomePage;
