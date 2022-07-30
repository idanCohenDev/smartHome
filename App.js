import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import { useState } from "react";
import HomePage from "./screens/HomePage";
import AddRoomPage from "./screens/AddRoomPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import uuid from "react-native-uuid";
import RoomPage from "./screens/RoomPage";

const Stack = createNativeStackNavigator();

class Room {
  constructor(name, type, color, id, items) {
    this.type = type;
    this.color = color;
    this.name = name;
    this.id = id;
    this.items = items;
  }
}

export class Item {
  constructor(name, on) {
    this.name = name;
    this.on = on;
  }
}

export default function App() {
  const [rooms, setRooms] = useState([]);
  const [chosenRoom, setChosenRoom] = useState({});

  const addRoom = (name, type, color) => {
    const room = new Room(name, type, color, uuid.v4(), []);
    setRooms([...rooms, room]);
  };

  const chooseRoom = (room) => setChosenRoom(room);

  const currentRoom = rooms.filter((room) => chosenRoom.id === room.id)[0];

  const addNewItem = (item) => {
    const newItem = new Item(item, false);
    const numberOfStereos = currentRoom.items.filter(
      (item) => item.name === "Stereo"
    ).length;
    if (
      currentRoom.items.length >= 5 ||
      (item === "Boiler" && currentRoom.type !== "Bathroom") ||
      (item === "Stereo" && numberOfStereos >= 1) ||
      !item
    ) {
      Alert.alert(
        "Error",
        "You can't select boiler not in a bathroom, more than one stereo and more than five items.",
        [
          {
            text: "Ok",
            style: "default",
          },
        ]
      );
    } else {
      setChosenRoom({
        ...chosenRoom,
        items: [...chosenRoom.items, newItem],
      });
      currentRoom.items.push(newItem);
    }
  };

  const toggleItem = (index) => {
    const currentRoomItems = currentRoom.items;
    currentRoomItems[index].on = !currentRoomItems[index].on;
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            options={{
              headerTintColor: "#371B58",
            }}
          >
            <Stack.Screen
              options={{ title: "Home", headerTintColor: "#371B58" }}
              name="home"
            >
              {(props) => (
                <HomePage {...props} chooseRoom={chooseRoom} rooms={rooms} />
              )}
            </Stack.Screen>
            <Stack.Screen
              options={{ title: "Add Room", headerTintColor: "#371B58" }}
              name="addRoom"
            >
              {(props) => <AddRoomPage {...props} onPressHandler={addRoom} />}
            </Stack.Screen>
            <Stack.Screen
              options={{ title: chosenRoom.name, headerTintColor: "#371B58" }}
              name="roomPage"
            >
              {(props) => (
                <RoomPage
                  {...props}
                  room={chosenRoom}
                  addNewItem={addNewItem}
                  toggleItem={toggleItem}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
