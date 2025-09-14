import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import RumahSakitCard from "../src/components/Registration/RumahSakitCard";

const DATA_RS = [
  {
    id: "1",
    name: "RS. Hermina",
    hours: "Open 24 Hours",
    phone: "(0274) 2800808",
    image: require("../../assets/images/rumah_sakit_image.png"),
  },
  {
    id: "2",
    name: "RS. Hermina",
    hours: "Open 24 Hours",
    phone: "(0274) 2800808",
    image: require("../../assets/images/rumah_sakit_image.png"),
  },
  {
    id: "3",
    name: "RS. Hermina",
    hours: "Open 24 Hours",
    phone: "(0274) 2800808",
    image: require("../../assets/images/rumah_sakit_image.png"),
  },
];

export default function PilihRumahSakit() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.subHeaderText}>
        Pilih Rumah Sakit yang Menerima Asuransi
      </Text>
      <Text style={styles.descText}>
        Ketik atau upgrade keluhanmu, dan kami bantu cek apakah kondisi kamu
        bisa ditanggung oleh asuransi.
      </Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari Rumah Sakit..."
      />

      {/* List Rumah Sakit */}
      <FlatList
        data={DATA_RS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12 }}>
            <RumahSakitCard
              name={item.name}
              hours={item.hours}
              phone={item.phone}
              image={item.image}
            />
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#F4F8FB",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0077B6",
  },
  subHeaderText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  descText: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
  },
  searchInput: {
    marginTop: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
