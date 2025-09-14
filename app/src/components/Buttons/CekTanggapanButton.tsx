import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function CekTanggapanButton() {
<<<<<<< HEAD
  return (
    <Pressable style={styles.cekTanggapanButton}>
      <Text style={styles.cekTanggapanText}>Cek Tanggapan →</Text>
=======
  
  return (
    <Pressable style={styles.cekTanggapanButton}>
      <Text style={styles.cekTanggapanText}   >Cek Tanggapan →</Text>
>>>>>>> 5a203208901fefdc10114716683351b844db2323
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cekTanggapanButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
<<<<<<< HEAD
    backgroundColor: Colors.primary500,
=======
    backgroundColor: Colors.primary,
>>>>>>> 5a203208901fefdc10114716683351b844db2323
    width: 177,
    aspectRatio: 177 / 36,
    borderRadius: 12,
  },
  cekTanggapanText: {
    color: "white",
  },
});
