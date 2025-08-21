import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";

export default function ClaimCard() {
  const router = useRouter();
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Klaim Asuransi Kesehatan Terakhir</Text>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/screen/claim-detail")}
      >
        <Text style={styles.buttonText}>KLAIM SEKARANG →</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#007AFF",
    fontWeight: "600",
  },
});
