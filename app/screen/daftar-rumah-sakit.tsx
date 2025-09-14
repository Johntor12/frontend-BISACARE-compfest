import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ScreenThree = () => {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ padding: 16 }}>
        <Text style={styles.title}>Coverage Display Interface</Text>
        <Text style={{ marginBottom: 20 }}>
          Ketik atau ucapkan keluhanmu, dan kami bantu cek apakah kondisimu bisa ditanggung oleh asuransi.
        </Text>

        <View style={styles.table}>
          <Row label="Jenis Layanan" value="Rawat Jalan" />
          <Row label="Deskripsi Layanan" value="MRI Otak, CT Scan" />
          <Row label="Status Pertanggungan" value="Ditanggung" />
          <Row label="Presentasi Pertanggungan" value="80%" />
          <Row label="Limit Maksimum" value="Rp5.000.000 per tahun" />
          <Row label="Sisa Kuota" value="Rp1.500.000" />
          <Row label="Estimasi biaya keluar" value="Rp450.000" />
          <Row label="Alasan status" value="Obat tidak masuk polis" />
          <Row label="Tanggal Efektif Pertanggungan" value="1 Jan 2025 - 31 Des 2025" />
          <Row label="Catatan Tambahan" value="Catatan Tambahan" />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lanjutkan Proses →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.row}>
    <Text style={styles.cellLabel}>{label}</Text>
    <Text style={styles.cellValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 8 },
  table: {
    backgroundColor: "#B4C9FF",
    borderRadius: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  cellLabel: { fontWeight: "bold", width: "45%" },
  cellValue: { width: "50%", textAlign: "right" },
  button: {
    backgroundColor: "#0D3B66",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  }
});

export default ScreenThree;
