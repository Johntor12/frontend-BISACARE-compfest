import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
import VoiceOverButton from "../Buttons/VoiceOverButton";

interface VoiceOverSectionProps {
  onCekTanggapan?: () => void;
}

export default function VoiceOverSection({
  onCekTanggapan,
}: VoiceOverSectionProps) {
  return (
    <>
      <VoiceOverButton></VoiceOverButton>
      {/* Cek Tanggapan */}
      <Pressable style={styles.cekTanggapanButton} onPress={onCekTanggapan}>
        <Text style={styles.cekTanggapanButtonText}>Cek Tanggapan</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  cekTanggapanButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryBlue700,
    width: 177,
    aspectRatio: 177 / 36,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  cekTanggapanButtonText: {
    color: "white",
  },
});
