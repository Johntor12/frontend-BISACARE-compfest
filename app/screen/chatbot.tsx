import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ChatArea, { Message } from "../src/components/ChatArea";
import Modal from "../src/components/Modal";
import ScreenContainer from "../src/components/ScreenContainer";

interface ChatbotScreenProps {
  variant?: "primary" | "secondary";
}

export default function ChatbotScreen({
  variant = "secondary",
}: ChatbotScreenProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Selamat Siang Denai. Berikut adalah beberapa hal yang harus kamu lakukan.",
      sender: "bot",
    },
  ]);

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
          { height: 2100 },
          variant === "primary" && { padding: 16 },
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

        {/* Chat Area */}
        <ChatArea messages={messages} setMessages={setMessages} />

        {variant === "secondary" && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowModal(true)}
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
}

const styles = StyleSheet.create({
  gradientWrapper: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
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
