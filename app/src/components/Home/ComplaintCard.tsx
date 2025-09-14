<<<<<<< HEAD
import { Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const { width, height } = Dimensions.get("window");

const cardWidth = (width * 362) / 412;
const cardHeight = (height * 209) / 1074;

export default function ComplaintCard() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Keluhanmu Bisa Diklaim?</Text>
        <Text style={styles.subtitle}>
          Ceritakan gejalamu, kami bantu cek klaimnya
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Masukkan Keluhanmu →</Text>
        </Pressable>
      </View>
    );
  }
=======
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ComplaintCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Keluhanmu Bisa Diklaim?</Text>
      <Text style={styles.subtitle}>
        Ceritakan gejalamu, kami bantu cek klaimnya
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Masukkan Keluhanmu →</Text>
      </Pressable>
    </View>
  );
>>>>>>> 5a203208901fefdc10114716683351b844db2323
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderColor: "#E0E0E0",
    borderWidth: 1,
<<<<<<< HEAD
    width: cardWidth,
  },
  title: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    fontFamily: "Roboto_500Medium",
  },
  button: {
    backgroundColor: Colors.primaryBlue700,
    borderRadius: 8,
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: "flex-end",
=======
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
>>>>>>> 5a203208901fefdc10114716683351b844db2323
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
<<<<<<< HEAD
    alignItems: "center",
=======
>>>>>>> 5a203208901fefdc10114716683351b844db2323
  },
});
