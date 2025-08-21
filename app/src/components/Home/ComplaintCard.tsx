import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ComplaintCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Keluhanmu Bisa Diklaim?</Text>
      <Text style={styles.subtitle}>
        Ceritakan gejalamu, kami bantu cek klaimnya
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Masukkan Keluhanmu →</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
