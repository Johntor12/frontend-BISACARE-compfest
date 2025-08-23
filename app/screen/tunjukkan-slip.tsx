// HospitalRegisterScreen.tsx
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function HospitalRegisterScreen() {
    const router = useRouter();

    const [slipImage, setSlipImage] = useState<string | null>(null);
    const [invoiceImage, setInvoiceImage] = useState<string | null>(null);

    const pickImage = async (type: "slip" | "invoice") => {
    // Minta izin akses galeri
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Izin akses galeri diperlukan!");
      return;
    }

    // Buka galeri
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      if (type === "slip") {
        setSlipImage(uri);
      } else {
        setInvoiceImage(uri);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => {
            router.back()
        }}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hi, Deira Aisya</Text>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.title}>
          <Text style={{ fontWeight: "bold" }}>Lihat dan Tunjukan Slip
            untuk Mendaftarkan Dirimu!</Text>
        </View>
        <Text style={styles.subtitle}>
          Ketik atau ucapkan keluhanmu, dan kami bantu cek apakah kondisimu bisa
          ditanggung oleh asuransi.
        </Text>

        {/* Download Slip */}
        {/* Upload Slip */}
      <Text style={styles.sectionTitle}>Download Slip</Text>
      <TouchableOpacity
        style={styles.uploadBox}
        onPress={() => pickImage("slip")}
      >
        {slipImage ? (
          <Image source={{ uri: slipImage }} style={styles.uploadedImage} />
        ) : (
          <Text style={styles.placeholderText}>
            Download dokumen dan tunjukkan ke kasir dari loket yang kamu dapat
          </Text>
        )}
      </TouchableOpacity>

        {/* Upload Invoice */}
      <Text style={styles.sectionTitle}>
        Sudah mendapat Dokumen/<Text style={{ fontStyle: "italic" }}>Invoice</Text> RS?
      </Text>
      <Text style={styles.desc}>Upload dokumen untuk disimpan</Text>

      <TouchableOpacity
        style={styles.uploadBox}
        onPress={() => pickImage("invoice")}
      >
        {invoiceImage ? (
          <Image source={{ uri: invoiceImage }} style={styles.uploadedImage} />
        ) : (
          <Text style={styles.placeholderText}>
            Scan/Upload KTP terbarumu{"\n"}Max file size : 10 MB
          </Text>
        )}
      </TouchableOpacity>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={() => {
            router.push("/screen/coverage")
        }}>
          <Text style={styles.buttonText}>Lanjutkan Proses</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    backgroundColor: "#00668C",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backBtn: {
    marginRight: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  desc: {
        fontSize: 14,
        color: "#555",
        marginBottom: 12,
  },
  body: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    color: "#111",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
    marginTop: 20,
    marginBottom: 4,
  },

  card: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#aaa",
    borderRadius: 8,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  cardText: {
    fontSize: 13,
    textAlign: "center",
    color: "#555",
    marginTop: 6,
  },

  button: {
    flexDirection: "row",
    backgroundColor: "#00668C",
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 6,
  },
  uploadBox: {
     borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#999",
    borderRadius: 10,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  placeholderText: {
    textAlign: "center",
    color: "#777",
    fontSize: 13,
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
