import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "./context/AuthContext";

const LoginScreen = ({ navigation }: any) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      navigation.replace("Home");
    } else {
      Alert.alert("Login Gagal", "Email / password salah!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Masukkan Email Anda" />

      <Text>Password</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="Masukkan Password Anda" />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>MASUK</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Belum Punya Akun? Daftar</Text>
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

export default LoginScreen;
