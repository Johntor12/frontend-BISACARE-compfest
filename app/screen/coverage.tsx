import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CoverageScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#5785FF", "#3737FA", "#5301DD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          <Text style={{ fontWeight: "700", fontStyle: "italic" }}>
            Coverage Display Interface{" "}
          </Text>
          (Apa saja yang menjadi tanggungan)
        </Text>
        <Text style={styles.desc}>
          Ketik atau ucapkan keluhanmu, dan kami bantu cek apakah kondisimu bisa ditanggung oleh asuransi.
        </Text>

        {/* Table */}
        <View style={styles.table}>
          {[
            { label: "Jenis Layanan", value: "Rawat Jalan" },
            { label: "Deskripsi Layanan", value: "MRI Otak, CT Scan" },
            { label: "Status Pertanggungan", value: "Ditanggung" },
            { label: "Presentasi Pertanggungan", value: "80%" },
            { label: "Limit Maksimum", value: "Rp5.000.000 per tahun" },
            { label: "Sisa Kuota", value: "Rp1.500.000" },
            { label: "Estimasi biaya keluar", value: "Rp450.000" },
            { label: "Alasan status", value: "Obat tidak masuk polis" },
            { label: "Tanggal Efektif Pertanggungan", value: "1 Jan 2025 - 31 Des 2025" },
            { label: "Catatan Tambahan", value: "Catatan Tambahan" },
          ].map((item, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.cell}>
                <Text style={styles.cellText}>{item.label}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.cellText}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={() => {
          router.push("/screen/selamat-menjalani-pemeriksaan")
        }}>
          <Text style={styles.buttonText}>Lanjutkan Proses →</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
  desc: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 15,
  },
  table: {
    backgroundColor: "#B4C9FF",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  cellText: {
    fontSize: 14,
    color: "#000",
  },
  button: {
    backgroundColor: "#003366",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
