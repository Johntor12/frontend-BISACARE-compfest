import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

interface KemungkinanHeaderProps {
  percentage?: number;
  dapatDiklaim?: boolean;
}

interface KemungkinanDiagnosisProps {
  kemungkinanDiagnosis?: string;
  polisMenanggung?: { label: string; color: string; icon?: string }[];
}

function KemungkinanHeader({
  percentage = 80,
  dapatDiklaim = true,
}: KemungkinanHeaderProps) {
  return (
    <View style={styles.kemungkinanHeaderCard}>
      <Text style={styles.kemungkinanHeaderText}>
        {percentage}% Kemungkinan Kondisimu
      </Text>
      {dapatDiklaim ? ( 
        <Text style={styles.kemungkinanHeaderDapatDiklaim}>Dapat Diklaim</Text>
      ) : (
        <Text style={styles.kemungkinanHeaderDapatDiklaim}>
          Tidak Dapat Diklaim
        </Text>
      )}
    </View>
  );
}

function KemungkinanDiagnosis({
  kemungkinanDiagnosis = "Infeksi saluran pernapasan atas / Faringitis",
  polisMenanggung = [
    { label: "Konsultasi Dokter Umum", color: "green" },
    { label: "Obat demam & batuk", color: "green" },
    { label: "Tes Lab Dasar", color: "yellow" },
    { label: "Rawat Inap", color: "red" },
  ],
}: KemungkinanDiagnosisProps) {
  return (
    <View style={styles.kemungkinanDignosisCard}>
      <Text style={styles.kemungkinanDiagnosisText}>
        Kemungkinan Diagnosis:
      </Text>
      <Text style={styles.kemungkinanDiagnosisText}>
        {kemungkinanDiagnosis}
      </Text>
      <Text>Polis Kamu Menanggung:</Text>
      {polisMenanggung.map((item, index) => (
        <Text key={index} style={[styles.polisItem, { color: item.color }]}>
          {item.label}
        </Text>
      ))}
    </View>
  );
}

export default function KemungkinanClaim() {
  return (
    <View style={styles.kemungkinanClaimSection}>
      <KemungkinanHeader percentage={80} dapatDiklaim={true} />
      <KemungkinanDiagnosis />
    </View>
  );
}

const styles = StyleSheet.create({
  kemungkinanClaimSection: {
    flexDirection: "column",
    gap: 12,
  },

  kemungkinanHeaderCard: {
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 356 / 84,
    padding: 12,
  },
  kemungkinanHeaderText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  kemungkinanHeaderDapatDiklaim: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#3737FA",
  },
  kemungkinanDignosisCard: {
    flexDirection: "column",
    padding: 12,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  kemungkinanDiagnosisText: {
    flexDirection: "column",
    gap: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  polisItem: {
    fontSize: 14,
  },
});
