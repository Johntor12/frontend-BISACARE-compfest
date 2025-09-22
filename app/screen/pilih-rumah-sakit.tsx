import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import RumahSakitCard from "../src/components/Registration/RumahSakitCard";
import ScreenContainer from "../src/components/ScreenContainer";

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
  {
    id: "4",
    name: "RS. Hermanto",
    hours: "Open 24 Hours",
    phone: "(0274) 2800808",
    image: require("../../assets/images/rumah_sakit_image.png"),
  },
  {
    id: "5",
    name: "RS. Herman H. N.",
    hours: "Open 24 Hours",
    phone: "(0274) 2800808",
    image: require("../../assets/images/rumah_sakit_image.png"),
  },
];

export default function PilihRumahSakit() {
  return (
    <ScreenContainer scrollable={false}>
      {/* Header */}
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.headerText}>Pilih Rumah Sakit</Text>
        <Text style={styles.subHeaderText}> yang </Text>
      </View>
      <Text style={styles.subHeaderText}>Menerima Asuransi</Text>
      <Text style={styles.descText}>
        Ketik atau ucapkan keluhanmu, dan kami bantu cek apakah kondisimu bisa
        ditanggung oleh asuransi.
      </Text>

      {/* Search Bar */}
      <TextInput style={styles.searchInput} placeholder="Cari Rumah Sakit..." />

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
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    marginTop: -54,
    zIndex: 10,
    borderTopLeftRadius: 12,
    borderTopEndRadius: 12,
    backgroundColor: "#F4F8FB",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
  },
  descText: {
    marginTop: 4,
    fontSize: 12,
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
