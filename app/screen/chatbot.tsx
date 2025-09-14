import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
}

const ChatbotScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Selamat Siang Denai. Berikut adalah beberapa hal yang harus kamu lakukan.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // simulasi balasan bot
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Ini adalah balasan otomatis dari bot.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";
    return (
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userBubble : styles.botBubble,
        ]}
      >
        <Text style={isUser ? styles.userText : styles.botText}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        {/* Header (bisa tambahkan gradient atau image background di sini) */}
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>Chatbot</Text>
        </View> */}

        {/* Chat messages */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.chatContainer}
        />

        {/* Input Bar */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="view-grid-outline" size={22} color="#3b3b98" />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatbotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
  },
  header: {
    height: 60,
    backgroundColor: "#2e86de",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  chatContainer: {
    padding: 12,
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },
  userBubble: {
    backgroundColor: "#2e86de",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
  },
  botBubble: {
    backgroundColor: "#e6e6e6",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },
  userText: {
    color: "#fff",
  },
  botText: {
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#e1e1e1",
    padding: 8,
    backgroundColor: "#fff",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    marginHorizontal: 8,
  },
  sendButton: {
    backgroundColor: "#2e86de",
    padding: 10,
    borderRadius: 20,
  },
  iconButton: {
    padding: 6,
  },
});
