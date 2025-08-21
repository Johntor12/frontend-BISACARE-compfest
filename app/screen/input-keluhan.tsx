import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import CekTanggapanButton from "../src/components/Buttons/CekTanggapanButton";
import CustomButton from "../src/components/Buttons/CustomButton";
import VoiceOverButton from "../src/components/Buttons/VoiceOverButton";
import KemungkinanClaim from "../src/components/Home/KemungkinanClaim";

export default function InputKeluhanScreen() {
  const [value, onChangeText] = useState("Input..");

  const router = useRouter();
  const handleClaim = () => {
    router.push("/screen/spot-scan");
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

      <TextInput
        editable
        numberOfLines={4}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={styles.textInput}
      />

      <CekTanggapanButton />
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
  textInput: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 16,
    width: "100%",
    aspectRatio: 366 / 237,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "EBE0FF",
    fontWeight: "medium",
  },
  button: {
    flexDirection: "row",
    gap: 8,
  },
});
