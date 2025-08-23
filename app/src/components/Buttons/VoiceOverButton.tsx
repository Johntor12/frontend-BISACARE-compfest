import Voice from "@react-native-voice/voice";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../constants/Colors";

export default function VoiceOverButton() {
  const [isRecording, setIsRecording] = useState(false);
  const [textInputValue, setTextInputValue] = useState("Input...");

  // Start recording function
  const startRecording = async () => {
    try {
      Voice.start("en-US"); // Mulai perekaman suara dengan bahasa yang diinginkan
      setIsRecording(true);
    } catch (error) {
      console.log("Error starting voice recognition: ", error);
    }
  };

  // Stop recording function
  const stopRecording = async () => {
    try {
      Voice.stop(); // Stop recording
      setIsRecording(false);
    } catch (error) {
      console.log("Error stopping voice recognition: ", error);
    }
  };

  // Function to handle the result from voice recognition
  const onSpeechResults = (e: any) => {
    const result = e.value[0]; // Ambil teks pertama dari hasil suara
    setTextInputValue(result); // Set input form dengan teks yang dikenali
  };

  useEffect(() => {
    // Add event listener for voice recognition results
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      // Clean up listeners
      Voice.removeAllListeners();
    };
  }, []);

  // Handle "Cek Tanggapan" button press
  const handleTanggapan = () => {
    console.log("Tanggapan: ", textInputValue);
    // Anda bisa menambahkan logika untuk mengirim tanggapan atau memprosesnya lebih lanjut.
  };

  return (
    <View>
      <Pressable
        style={styles.voiceoverButton}
        onPress={isRecording ? stopRecording : startRecording}
      >
        <Text style={styles.voiceoverText}>
          {isRecording ? "Stop VoiceOver" : "Gunakan VoiceOver"}
        </Text>
      </Pressable>
      {/* TextInput untuk memasukkan hasil VoiceOver */}
      <TextInput
        style={styles.textInput}
        value={textInputValue}
        onChangeText={setTextInputValue}
      />

      {/* Tombol Cek Tanggapan */}
      <Pressable style={styles.cekTanggapanButton} onPress={handleTanggapan}>
        <Text style={styles.cekTanggapanButtonText}>Cek Tanggapan</Text>
      </Pressable>
    </View>
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
  cekTanggapanButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: 177,
    aspectRatio: 177 / 36,
    borderRadius: 12,
  },
  cekTanggapanButtonText: {
    color: "white",
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
  voiceoverText: {
    color: "white",
  },
});
