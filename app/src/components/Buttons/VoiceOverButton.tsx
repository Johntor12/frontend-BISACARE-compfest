import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function VoiceOverButton() {
  return (
    <Pressable style={styles.voiceoverButton}>
      <Text style={styles.voiceoverText}>Gunakan VoiceOver</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  voiceoverButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: 177,
    aspectRatio: 177 / 36,
    borderRadius: 12,
  },
  voiceoverText: {
    color: "white",
  },
});
