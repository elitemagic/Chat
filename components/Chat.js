import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

const Chat = ({ route, navigation }) => {
  const { name, background } = route.params;

  /* initailze state */
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  /* Function called right after the Chat component mounts - uses setter method to see each element of the UI displayed on the screen right away*/
  useEffect(() => {
    /* Set the title of the screen as the users name */
    navigation.setOptions({ title: name });

    setMessages([
      {
        /* Displays a chat message */
        _id: 2,
        text: "Hello, what did you want to talk about?",
        createdAt: new Date(),
        user: {
          _id: 3,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        /* Displays a system message */
        _id: 1,
        text: "Welcome to the chat",
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
          left: {
            backgroundColor: "#FFF",
          },
        }}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
