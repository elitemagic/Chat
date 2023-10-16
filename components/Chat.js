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

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  /* Function called right after the Chat component mounts - use setter method to see each element of the UI displayed on the screen right away*/
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "This is a system message",
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

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
