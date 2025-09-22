import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "../src/components/Modal";
import ScreenContainer from "../src/components/ScreenContainer";
import Colors from "../src/constants/Colors";

interface Message {
  id: string;
  text: string;
  image?: string;
  sender: "bot" | "user";
}

interface ChatbotScreenProps {
  variant?: "primary" | "secondary";
}

const ChatbotScreen = ({ variant = "secondary" }: ChatbotScreenProps) => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [imagePick, setImagepick] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Selamat Siang Denai. Berikut adalah beberapa hal yang harus kamu lakukan.",
      sender: "bot",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      image: imagePick || undefined,
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

  const pickImage = async (setter: (uri: string) => void) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images", // ← pakai string literal, bukan MediaTypeOptions
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      setter(result.assets[0].uri);
    }
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
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.messageImage} />
        ) : null}
        {item.text ? (
          <Text style={isUser ? styles.userText : styles.botText}>
            {item.text}
          </Text>
        ) : null}
      </View>
    );
  };

  return (
    <ScreenContainer
      scrollable={false}
      variantColor="secondary"
      customStyle={{ padding: 0 }}
    >
      <LinearGradient
        colors={["#5785FF", "#3737FA", "#5301DD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.14, 0.54, 1]}
        style={[
          styles.gradientWrapper,
          {
            height: 2100,
          },
          variant == "primary" && { padding: 16 },
        ]}
      >
        {variant === "secondary" && (
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>
              Conversational AI Claim Helper
            </Text>
            <Text style={styles.headerSubtitle}>
              Ketik atau ucapkan keluhanmu, dan kami bantu cek apakah kondisimu
              bisa ditanggung oleh asuransi.
            </Text>
          </View>
        )}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 180}
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
            keyboardShouldPersistTaps="handled"
          />

          {/* Image Preview sebelum kirim */}
          {imagePick && (
            <View style={styles.previewContainer}>
              <Image source={{ uri: imagePick }} style={styles.previewImage} />
              <TouchableOpacity onPress={() => setImagepick(null)}>
                <Ionicons name="close-circle" size={28} color="red" />
              </TouchableOpacity>
            </View>
          )}

          {/* Input Bar */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type your message..."
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => pickImage((uri) => setImagepick(uri))}
            >
              <MaterialCommunityIcons
                name="view-grid-outline"
                size={22}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Ionicons name="send" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        {variant === "secondary" && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setShowModal(true);
            }}
          >
            <Text style={styles.buttonText}>Lanjutkan Proses →</Text>
          </TouchableOpacity>
        )}
      </LinearGradient>
      {showModal && (
        <Modal
          visible={showModal}
          title="Ingin Request Tambahan?"
          onClose={() => setShowModal(false)}
          onTrue={() => router.push("/screen/claim-form")}
          falseText="Tidak"
          trueText="Tambah"
        />
      )}
    </ScreenContainer>
  );
};

export default ChatbotScreen;

const styles = StyleSheet.create({
  gradientWrapper: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    zIndex: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    borderRadius: 12,
    zIndex: 10,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    fontStyle: "italic",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 16,
    gap: 8,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 14,
  },
  chatContainer: {
    padding: 20,
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
    backgroundColor: Colors.secondary50,
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
    padding: 10,
    borderRadius: 20,
  },
  iconButton: {
    padding: 6,
  },
  messageImage: {
    width: 150,
    height: 100,
    borderRadius: 12,
    marginBottom: 6,
  },
  previewContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
  previewImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 8,
  },
  button: {
    marginTop: 32,
    backgroundColor: "#003366",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
