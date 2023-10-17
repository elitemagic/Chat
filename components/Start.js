import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

// The app’s main Chat component that renders the chat UI
const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [backgroundStart, setBackgroundStart] = useState(
    "backgroundstartdefault"
  );
  const [backgroundChat, setBackgroundChat] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground /* Background Image */
        source={
          backgroundStart === "backgroundstartdefault"
            ? null
            : backgroundStart === "background1"
            ? require("../assets/background1.png")
            : backgroundStart === "background2"
            ? require("../assets/background2.png")
            : require("../assets/background3.png")
        }
        style={styles.backgroundImage}
      >
        <View style={styles.topContainer}>
          <Text style={styles.welcome_text}>Welcome to Chat</Text>
        </View>

        <View style={styles.bottomContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your name"
          />

          <Text>Set your favorite background image</Text>
          <View style={styles.backgroundStartSelect}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Options for background selection, this is the first"
              accessibilityRole="button"
              accessibilityHint="Let's you choose a background for your start screen"
              onPress={() => setBackgroundStart("background1")}
            >
              <Image
                source={require("../assets/background1.png")}
                style={styles.backgroundStart_icons}
              />
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Options for background selection, this is the second"
              accessibilityRole="button"
              accessibilityHint="Let's you choose a background for your start screen"
              onPress={() => setBackgroundStart("background2")}
            >
              <Image
                source={require("../assets/background2.png")}
                style={styles.backgroundStart_icons}
              />
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Options for background selection, this is the third and final option"
              accessibilityRole="button"
              accessibilityHint="Let's you choose a background for your start screen"
              onPress={() => setBackgroundStart("background3")}
            >
              <Image
                source={require("../assets/background3.png")}
                style={styles.backgroundStart_icons}
              />
            </TouchableOpacity>
          </View>

          <Text>Set background color for your chat screen</Text>
          <View style={styles.backgroundChatSelect}>
            {["#87CEEB", "#E6E6FA", "#90EE90", "#F08080"].map(
              (color, index) => (
                <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="Choose one of four options for colour of the background on the next screen, the chat section"
                  accessibilityRole="button"
                  accessibilityHint="Let's you choose a background for your chat screen"
                  key={index}
                  style={[
                    styles.backgroundChat_icons,
                    { backgroundColor: color },
                    { borderColor: backgroundChat === color ? "#000" : "#FFF" },
                  ]}
                  onPress={() => setBackgroundChat(color)}
                />
              )
            )}
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Enter Chat"
              onPress={() =>
                navigation.navigate("Chat", {
                  name: name,
                  background: backgroundChat,
                })
              }
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
  },
  welcome_text: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
  },
  bottomContainer: {
    width: "88%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    textAlign: "center",
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginBottom: 15,
  },
  backgroundStartSelect: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
  },
  backgroundStart_icons: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  backgroundChatSelect: {
    flexDirection: "row",
    justifyContent: "center",
  },
  backgroundChat_icons: {
    width: 40,
    height: 40,
    borderRadius: 25,
    margin: 10,
    borderWidth: 2,
  },
  buttonContainer: {
    width: "100%",
  },
});

export default Start;
