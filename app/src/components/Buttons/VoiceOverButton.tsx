<<<<<<< HEAD
// import Voice, {
//   SpeechErrorEvent,
//   SpeechResultsEvent,
// } from "@react-native-voice/voice";
=======
import Voice from "@react-native-voice/voice";
import React, { useState } from "react";
>>>>>>> 5a203208901fefdc10114716683351b844db2323
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../constants/Colors";

export default function VoiceOverButton() {
<<<<<<< HEAD
  // const [isRecording, setIsRecording] = useState(false);
  // const [textInputValue, setTextInputValue] = useState("Input...");

  // // const [recognizing, setRecognizing] = useState(false);
  // // const [transcript, setTranscript] = useState("");

  // // useSpeechRecognitionEvent("start", () => setRecognizing(true));
  // // useSpeechRecognitionEvent("end", () => setRecognizing(false));
  // // useSpeechRecognitionEvent("result", (event) => {
  // //   setTranscript(event.results[0]?.transcript);
  // // });
  // // useSpeechRecognitionEvent("error", (event) => {
  // //   console.log("error code:", event.error, "error message:", event.message);
  // // });

  // // const handleStart = async () => {
  // //   const result = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
  // //   if (!result.granted) {
  // //     console.warn("Permissions not granted", result);
  // //     return;
  // //   }
  // //   // Start speech recognition
  // //   ExpoSpeechRecognitionModule.start({
  // //     lang: "en-US",
  // //     interimResults: true,
  // //     continuous: false,
  // //   });
  // // };

  // // Start recording function
  // const startRecording = async () => {
  //   try {
  //     Voice.start("en-US"); // Mulai perekaman suara dengan bahasa yang diinginkan
  //     setIsRecording(true);
  //   } catch (error) {
  //     console.log("Error starting voice recognition: ", error);
  //   }
  // };

  // // Stop recording function
  // const stopRecording = async () => {
  //   try {
  //     Voice.stop(); // Stop recording
  //     setIsRecording(false);
  //   } catch (error) {
  //     console.log("Error stopping voice recognition: ", error);
  //   }
  // };

  // // Function to handle the result from voice recognition
  // const onSpeechResults = (e: SpeechResultsEvent) => {
  //   if (e.value && e.value.length > 0) {
  //     setTextInputValue(e.value[0]); // gunakan hasil pertama
  //   }
  // };

  // const onSpeechError = (e: SpeechErrorEvent) => {
  //   console.log("Speech recognition error:", e.error);
=======
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

  // // Function to handle the result from voice recognition
  // const onSpeechResults = (e: any) => {
  //   const result = e.value[0]; // Ambil teks pertama dari hasil suara
  //   setTextInputValue(result); // Set input form dengan teks yang dikenali
>>>>>>> 5a203208901fefdc10114716683351b844db2323
  // };

  // useEffect(() => {
  //   // Add event listener for voice recognition results
  //   Voice.onSpeechResults = onSpeechResults;
<<<<<<< HEAD
  //   Voice.onSpeechError = onSpeechError;

  //   return () => {
  //     // Clean up listeners
  //     Voice.destroy().then(Voice.removeAllListeners);
  //   };
  // }, []);

  // // Handle "Cek Tanggapan" button press
  // const handleTanggapan = () => {
  //   console.log("Tanggapan: ", textInputValue);
  //   // Anda bisa menambahkan logika untuk mengirim tanggapan atau memprosesnya lebih lanjut.
  // };
=======

  //   return () => {
  //     // Clean up listeners
  //     Voice.removeAllListeners();
  //   };
  // }, []);

  // Handle "Cek Tanggapan" button press
  const handleTanggapan = () => {
    console.log("Tanggapan: ", textInputValue);
    // Anda bisa menambahkan logika untuk mengirim tanggapan atau memprosesnya lebih lanjut.
  };
>>>>>>> 5a203208901fefdc10114716683351b844db2323

  return (
    <View>
      <Pressable
        style={styles.voiceoverButton}
<<<<<<< HEAD
        // onPress={isRecording ? stopRecording : startRecording}
      >
        <Text style={styles.voiceoverText}>Gunakan VoiceOver</Text>
=======
        onPress={isRecording ? stopRecording : startRecording}
      >
        <Text style={styles.voiceoverText}>
          {isRecording ? "Stop VoiceOver" : "Gunakan VoiceOver"}
        </Text>
>>>>>>> 5a203208901fefdc10114716683351b844db2323
      </Pressable>
      {/* TextInput untuk memasukkan hasil VoiceOver */}
      <TextInput
        style={styles.textInput}
<<<<<<< HEAD
        // value={textInputValue}
        // onChangeText={setTextInputValue}
      />

      {/* Tombol Cek Tanggapan */}
      <Pressable
        style={styles.cekTanggapanButton}
        // onPress={handleTanggapan}
      >
=======
        value={textInputValue}
        onChangeText={setTextInputValue}
      />

      {/* Tombol Cek Tanggapan */}
      <Pressable style={styles.cekTanggapanButton} onPress={handleTanggapan}>
>>>>>>> 5a203208901fefdc10114716683351b844db2323
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
<<<<<<< HEAD
    backgroundColor: Colors.primaryBlue700,
=======
    backgroundColor: Colors.primary,
>>>>>>> 5a203208901fefdc10114716683351b844db2323
    width: 177,
    aspectRatio: 177 / 36,
    borderRadius: 12,
  },
  cekTanggapanButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
<<<<<<< HEAD
    backgroundColor: Colors.primaryBlue700,
=======
    backgroundColor: Colors.primary,
>>>>>>> 5a203208901fefdc10114716683351b844db2323
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
