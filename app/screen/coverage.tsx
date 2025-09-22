import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenContainer from "../src/components/ScreenContainer";
import Colors from "../src/constants/Colors";

export default function CoverageScreen() {
  const router = useRouter();

  const tableData = [
    { label: "Kategori", value: "Output" },
    { label: "Jenis Layanan", value: "Rawat Jalan" },
    { label: "Deskripsi Layanan", value: "MRI Otak, CT Scan" },
    { label: "Status Pertanggungan", value: "Ditanggung" },
    { label: "Presentasi Pertanggungan", value: "80%" },
    { label: "Limit Maksimum", value: "Rp5.000.000 per tahun" },
    { label: "Sisa Kuota", value: "Rp1.500.000" },
    { label: "Estimasi biaya keluar", value: "Rp450.000" },
    { label: "Alasan status", value: "Obat tidak masuk polis" },
    {
      label: "Tanggal Efektif Pertanggungan",
      value: "1 Jan 2025 - 31 Des 2025",
    },
    { label: "Catatan Tambahan", value: "Catatan Tambahan" },
  ];

  return (
    <ScreenContainer variantColor="secondary">
      {/* Subtitle */}
      <Text style={styles.subtitle}>
        <Text style={{ fontWeight: "700", fontStyle: "italic" }}>
          Coverage Display Interface{" "}
        </Text>
        (Apa saja yang menjadi tanggungan)
      </Text>
      <Text style={styles.desc}>
        Kami bantu cek apakah kondisimu bisa ditanggung oleh asuransi.
      </Text>

      {/* Table */}
      <View style={styles.table}>
        {tableData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.row,
              index === 0 && styles.firstRow, // background berbeda untuk row pertama
            ]}
          >
            <View style={[styles.cell, styles.leftCell]}>
              <Text style={styles.cellTextLabel}>{item.label}</Text>
            </View>
            {/* garis vertikal */}
            <View style={styles.divider} />
            <View style={[styles.cell, styles.rightCell]}>
              <Text style={styles.cellTextValue}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/screen/selamat-menjalani-pemeriksaan");
        }}
      >
        <Text style={styles.buttonText}>Lanjutkan Proses →</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -72,
    zIndex: 10,
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
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
  },
  desc: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 15,
  },
  table: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  firstRow: {
    backgroundColor: Colors.primary200,
  },

  row: {
    flexDirection: "row",
  },
  leftCell: {
    alignItems: "center",
  },
  rightCell: {
    alignItems: "center",
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  cellTextLabel: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  cellTextValue: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
  },
  divider: {
    width: 1,
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "#003366",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
