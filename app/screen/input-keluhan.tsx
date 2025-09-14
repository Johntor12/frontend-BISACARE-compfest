import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
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
    <>
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
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton label="Tidak Klaim" onPress={handleNotClaim} />
        <CustomButton label="Klaim Sekarang" onPress={handleClaim} />
      </View>
    </>
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
  buttonContainer: {
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#ECF1FF",
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    gap: 20,
  },
});
