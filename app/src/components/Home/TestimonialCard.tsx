import { Image, StyleSheet, Text, View } from "react-native";

export default function TestimonialCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kisah Nyata. Perlindungan Nyata.</Text>
      <Text style={styles.subtitle}>
        Di saat sulit, perlindungan bukan cuma janji. Ini buktinya.
      </Text>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Image
            source={require("../../../../assets/images/woman.png")}
            style={styles.image}
          />
          <Text style={styles.quote}>
            “Berkat bantuan asuransi, ibu saya berhasil sembuh dari stroke
            karena layanan operasi yang optimal.”
          </Text>
          <Text style={styles.author}>- Hanifah</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../../../../assets/images/woman.png")}
            style={styles.image}
          />
          <Text style={styles.quote}>
            “Berkat bantuan asuransi, ibu saya berhasil sembuh dari stroke
            karena layanan operasi yang optimal.”
          </Text>
          <Text style={styles.author}>- Hanifah</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  cardRow: {
    flexDirection: "row",
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  quote: {
    fontSize: 13,
    fontStyle: "italic",
    marginBottom: 4,
  },
  author: {
    fontSize: 12,
    color: "#333",
    textAlign: "right",
  },
});
