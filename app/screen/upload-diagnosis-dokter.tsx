import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const UploadDiagnosisDokter = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      <View style={{ padding: 16 }}>
        <Text style={styles.title}>Berikan/Upload hasil Diagnosis Dokter</Text>
        <View style={styles.uploadBox}>
          <Text style={{ color: "gray" }}>+ Upload File</Text>
        </View>

        <Text style={styles.title}>Tuliskan Diagnosis Dokter</Text>
        <TextInput
          placeholder="Tulis di sini..."
          style={styles.textarea}
          multiline
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/screen/daftar-rumah-sakit")}
        >
          <Text style={styles.buttonText}>Cek Tanggapan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontWeight: "bold", marginVertical: 10 },
  uploadBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 40,
    alignItems: "center",
    marginBottom: 20,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 100,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0D3B66",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  }
});

export default UploadDiagnosisDokter;
