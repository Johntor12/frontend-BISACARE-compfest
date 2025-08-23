// ClaimFormScreen.tsx
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Button, TextInput } from "react-native-paper";

const ClaimFormScreen = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceValue, setServiceValue] = useState<string | null>(null);
  const [serviceItems, setServiceItems] = useState([
    { label: "Rawat jalan", value: "rawat_jalan" },
    { label: "Rawat inap", value: "rawat_inap" },
    { label: "IGD", value: "igd" },
    { label: "Lainnya", value: "lainnya" },
  ]);

  const [ktpImage, setKtpImage] = useState<string | null>(null);
  const [asuransiImage, setAsuransiImage] = useState<string | null>(null);
  
  const router = useRouter();

  // Fungsi pilih gambar
  const pickImage = async (setter: (uri: string) => void) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setter(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Header */}
      <View style={styles.header}>
      </View>

      {/* Card */}
      <View style={styles.card}> q
        <View style={styles.title}>
          <Text style={{ fontWeight: "700" }}>Mari isi Data Dulu untuk Menerima Asuransi</Text>
        </View>
        <Text style={styles.subtitle}>
          Ketik atau ucapkan keluhanmu, dan kami bantu cek apakah kondisimu bisa ditanggung oleh asuransi.
        </Text>

        {/* Upload KTP */}
        <Text style={styles.label}>Scan/Upload Foto KTP</Text>
        <TouchableOpacity
          style={styles.uploadBox}
          onPress={() => pickImage((uri) => setKtpImage(uri))}
        >
          {ktpImage ? (
            <Image source={{ uri: ktpImage }} style={styles.uploadImage} />
          ) : (
            <Text style={styles.uploadText}>
              Scan/Upload KTP terbarumu{"\n"}Max file size : 10 MB
            </Text>
          )}
          </TouchableOpacity>

        {/* Upload Kartu Asuransi */}
        <Text style={styles.label}>Scan/Upload Kartu Asuransi</Text>
        <TouchableOpacity
          style={styles.uploadBox}
          onPress={() => pickImage((uri) => setAsuransiImage(uri))}
        >
          {asuransiImage ? (
            <Image source={{ uri: asuransiImage }} style={styles.uploadImage} />
          ) : (
            <Text style={styles.uploadText}>
              Scan/Upload Kartu Asuransi{"\n"}Max file size : 10 MB
            </Text>
          )}
        </TouchableOpacity>

        {/* Nomor Polis */}
        <TextInput
          mode="outlined"
          label="Polis number"
          left={<TextInput.Icon icon="credit-card" />}
          style={styles.input}
        />
        <Text style={styles.hint}>
          This is a hint text to help user.
        </Text>

        {/* Panduan */}
        <Button
          mode="contained-tonal"
          onPress={() => {}}
          contentStyle={{ flexDirection: "row-reverse" }}
          style={{ marginVertical: 10 }}
        >
          <Text>Panduan Pembuatan Kartu Asuransi</Text>
        </Button>

        {/* Dropdown Layanan */}
        <Text style={styles.label}>Pilih Layanan</Text>
        <DropDownPicker
          open={serviceOpen}
          value={serviceValue}
          items={serviceItems}
          setOpen={setServiceOpen}
          setValue={setServiceValue}
          setItems={setServiceItems}
          placeholder="Select service"
          style={styles.dropdown}
        />
        <Text style={styles.hint}>This is a hint text to help user.</Text>

        {/* Nomor HP */}
        <Text style={styles.label}>Nomor HP Aktif</Text>
        <TextInput
          mode="outlined"
          label="Nomor HP"
          keyboardType="phone-pad"
          left={<TextInput.Icon icon="cellphone" />}
          style={styles.input}
        />
        <Text style={styles.hint}>This is a hint text to help user.</Text>

        {/* Input Keluhan */}
        <Text style={styles.label}>Input Keluhan</Text>
        <TextInput
          mode="outlined"
          placeholder="Input keluhan kesehatanmu..."
          multiline
          numberOfLines={4}
          style={[styles.input, { height: 120 }]}
        />
        <Text style={styles.hint}>Max 500 words</Text>

        {/* Button */}
        <Button
          mode="contained"
          style={styles.submitBtn}
          onPress={() => {
            router.push("/screen/tunjukkan-slip")
          }}
        >
          <Text>
            Lanjutkan Proses
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default ClaimFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f8fb",
  },
  header: {
    backgroundColor: "#0a74b9",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 20,
    borderRadius: 16,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 13,
    color: "#444",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 6,
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#aaa",
    borderRadius: 8,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  uploadText: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
  },
  uploadImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  input: {
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  hint: {
    fontSize: 12,
    color: "#777",
    marginBottom: 12,
  },
  dropdown: {
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 8,
  },
  submitBtn: {
    marginTop: 20,
    paddingVertical: 6,
    borderRadius: 8,
  },
});
