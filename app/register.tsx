import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "./context/AuthContext";

const RegisterScreen = ({ navigation }: any) => {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async () => {
    const success = await register(email, password, name);
    if (success) {
      navigation.replace("Home");
    } else {
      Alert.alert("Registrasi Gagal", "Isi semua data dengan benar!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <Text>Nama</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Masukkan Nama Anda" />

      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Masukkan Email Anda" />

      <Text>Password</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="Masukkan Password Anda" />

      <Text>No. Telepon</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Masukkan Nomor Telepon Anda" />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>DAFTAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Sudah Punya Akun? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E6F7FF", padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 15, backgroundColor: "#fff" },
  button: { backgroundColor: "#008CBA", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 10 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  link: { color: "#008CBA", marginTop: 15, textAlign: "center" }
});

export default RegisterScreen;
