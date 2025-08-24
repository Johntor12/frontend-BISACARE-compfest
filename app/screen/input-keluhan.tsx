import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import CustomButton from "../src/components/Buttons/CustomButton";
import VoiceOverButton from "../src/components/Buttons/VoiceOverButton";
import KemungkinanClaim from "../src/components/Home/KemungkinanClaim";

export default function InputKeluhanScreen() {
  const [value, onChangeText] = useState("Input..");

  const router = useRouter();
  const handleClaim = () => {
    router.push("/screen/pilih-rumah-sakit");
  };

  const handleNotClaim = () => {
    console.log("Tidak Klaim");
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
    >
      <Text style={styles.headerText}>Apa yang Kamu Rasakan Sekarang?</Text>
      <Text style={styles.subHeaderText}>
        Ketik atau ucapkan keluhanmu, dan kami bantu cek apakah kondisimu bisa
        ditanggung oleh asuransi.
      </Text>

      <VoiceOverButton />

      <KemungkinanClaim />
      <ScrollView style={styles.button}>
        <CustomButton label="Klaim Sekarang" onPress={handleClaim} />
        <CustomButton label="Tidak Klaim" onPress={handleNotClaim} />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    gap: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: "medium",
  },
  button: {
    flexDirection: "row",
    gap: 8,
  },
});