import { useRouter } from "expo-router";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import Colors from "../../constants/Colors";

const { width, height } = Dimensions.get("window");

const cardWidth = (width * 362) / 412;
const cardHeight = (height * 209) / 1074;

export default function ClaimCard() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return null; // Or a loading indicator
  } else {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Klaim Asuransi Kesehatan Terakhir</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => router.push("/screen/claim-detail")}
          >
            <Text style={styles.buttonText}>KLAIM SEKARANG →</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "column",
    width: cardWidth,
    height: cardHeight,
  },
  title: {
    width: 200,
    color: "#fff",
    fontSize: 20,
    marginBottom: 8,
    fontFamily: "Roboto_700Bold",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#007AFF",
    fontWeight: "600",
  },
});
