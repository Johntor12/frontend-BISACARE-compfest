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
<<<<<<< HEAD
      {dapatDiklaim ? (
=======
      {dapatDiklaim ? ( 
>>>>>>> 5a203208901fefdc10114716683351b844db2323
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
<<<<<<< HEAD
    { label: "🟢 Konsultasi Dokter Umum", color: "black" },
    { label: "🟢 Obat demam & batuk", color: "black" },
    { label: "🟡 Tes Lab Dasar", color: "black" },
    { label: "🔴 Rawat Inap", color: "black" },
=======
    { label: "Konsultasi Dokter Umum", color: "green" },
    { label: "Obat demam & batuk", color: "green" },
    { label: "Tes Lab Dasar", color: "yellow" },
    { label: "Rawat Inap", color: "red" },
>>>>>>> 5a203208901fefdc10114716683351b844db2323
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
<<<<<<< HEAD
      <Text>📄 Polis Kamu Menanggung:</Text>
=======
      <Text>Polis Kamu Menanggung:</Text>
>>>>>>> 5a203208901fefdc10114716683351b844db2323
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
<<<<<<< HEAD
    borderRadius: 12,
=======
>>>>>>> 5a203208901fefdc10114716683351b844db2323
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
<<<<<<< HEAD
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#3737FA",
    marginTop: 12,
=======
>>>>>>> 5a203208901fefdc10114716683351b844db2323
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
<<<<<<< HEAD
    borderColor: "#3737FA",
    borderWidth: 2,
    marginBottom: 100,
=======
>>>>>>> 5a203208901fefdc10114716683351b844db2323
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
