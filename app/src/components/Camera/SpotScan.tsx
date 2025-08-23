import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SpotScanProps {
  onScan: (uri: string) => void;
  onUpload: (uri: string) => void;
}

const SpotScanFrame = () => {
  return (
    <View style={styles.frameContainer}>
      <View style={[styles.frame, styles.topFrame]} />
      <View style={[styles.frame, styles.leftFrame]} />
      <View style={[styles.frame, styles.bottomFrame]} />
      <View style={[styles.frame, styles.rightFrame]} />
    </View>
  );
};

const SpotScan = ({ onScan, onUpload }: SpotScanProps) => {
  const [isCameraReady, setCameraReady] = useState(false);
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const router = useRouter();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleCameraReady = () => {
    setCameraReady(true);
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const handleScan = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri); // Set URI dari gambar yang dipindai
      onScan(photo.uri); // Pass the image URI to the parent component
    }
  };

  const handleUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setCapturedImage(uri); // Set the uploaded image URI
      onUpload(uri); // Pass the selected image URI to the parent component
    }
  };

  const handleLanjut = () => {
    router.push("/screen/tunjukkan-slip")
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Kamera */}
      <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        style={styles.camera}
        onCameraReady={handleCameraReady}
        ref={cameraRef}
      >
        {isCameraReady && <SpotScanFrame />}
      </CameraView>

      {/* Tombol Scan dan Upload */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleScan}>
          <Text style={styles.buttonText}>SCAN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonText}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
      {capturedImage && (
        <View style={styles.imageContainer}>
          <Text style={styles.imageText}>Captured Image:</Text>
          <Image source={{ uri: capturedImage }} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={handleLanjut}>
          <Text style={styles.buttonText}>Lanjut</Text>
        </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  frameContainer: {
    position: "absolute",
    top: "10%",
    left: "10%",
    right: "10%",
    bottom: "10%",
    borderWidth: 3,
    borderColor: "#FF5733", // Warna orange seperti yang ada di desain
    borderRadius: 8,
  },
  frame: {
    position: "absolute",
    backgroundColor: "transparent",
  },
  topFrame: {
    top: 0,
    left: 0,
    right: 0,
    height: "10%",
  },
  leftFrame: {
    top: 0,
    left: 0,
    bottom: 0,
    width: "10%",
  },
  bottomFrame: {
    bottom: 0,
    left: 0,
    right: 0,
    height: "10%",
  },
  rightFrame: {
    top: 0,
    right: 0,
    bottom: 0,
    width: "10%",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFBFF",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    padding: 20,
  },
  button: {
    backgroundColor: "#005D85",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },

  imageContainer: {
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  imageText: {
    color: "white",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
});

export default SpotScan;
