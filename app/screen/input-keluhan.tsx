import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "../src/components/Buttons/CustomButton";
import KemungkinanClaim from "../src/components/Home/KemungkinanClaim";
import VoiceOverSection from "../src/components/Home/VoiceOverSection";
import Colors from "../src/constants/Colors";

interface ClaimData {
  percentage: number;
  dapatDiklaim: boolean;
  kemungkinanDiagnosis: string;
  polisMenanggung: { label: string; status: "green" | "yellow" | "red" }[];
}

const dummyData: ClaimData = {
  percentage: 80,
  dapatDiklaim: true,
  kemungkinanDiagnosis: "Infeksi saluran pernapasan atas / Faringitis",
  polisMenanggung: [
    { label: "Konsultasi Dokter Umum", status: "green" },
    { label: "Obat demam & batuk", status: "green" },
    { label: "Tes Lab Dasar", status: "yellow" },
    { label: "Rawat Inap", status: "red" },
  ],
};

export default function InputKeluhanScreen() {
  const [showClaim, setShowClaim] = useState(false);
  const [loading, setLoading] = useState(false);

  const [claimData, setClaimData] = useState<ClaimData | null>(null);

  const router = useRouter();

  const handleClaim = () => {
    router.push("/screen/pilih-rumah-sakit");
  };

  const handleNotClaim = () => {
    console.log("Tidak Klaim");
  };

  const handleCekTanggapan = async () => {
    setLoading(true);
    setShowClaim(true);

    // const fetchData = async () => {
    //   try {
    //     const res = await fetch("http://192.168.0.108:8000/claim");
    //     if (!res.ok) throw new Error("Failed to fetch");
    //     const json = await res.json();

    //     setTimeout(() => {
    //       setClaimData({
    //         percentage: json.percentage ?? 0,
    //         dapatDiklaim: json.dapatDiklaim ?? false,
    //         kemungkinanDiagnosis:
    //           json.kemungkinanDiagnosis ?? dummyData.kemungkinanDiagnosis,
    //         polisMenanggung: json.polisMenanggung ?? dummyData.polisMenanggung,
    //       });
    //     });
    //   } catch (err) {
    //     console.log("Error fetching claim:", err);
    //     setClaimData(dummyData);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // Simulasi fetch 1 detik
    setTimeout(() => {
      setClaimData(dummyData);
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          paddingBottom: showClaim ? 120 : 40,
        }}
      >
        <Text style={styles.headerText}>Apa yang Kamu Rasakan Sekarang?</Text>
        <Text style={styles.subHeaderText}>
          Ketik atau ucapkan keluhanmu, dan kami bantu cek apakah kondisimu bisa
          ditanggung oleh asuransi.
        </Text>

        <VoiceOverSection onCekTanggapan={handleCekTanggapan} />

        {claimData && (
          <>
            <KemungkinanClaim data={claimData} />
            <View style={styles.buttonContainer}>
              <CustomButton
                label="Tidak Klaim"
                onPress={handleNotClaim}
                variant="secondary"
                customWidth={129}
                customStyle={{ marginRight: 8 }}
              />
              <CustomButton
                label="Klaim Sekarang"
                onPress={handleClaim}
                customWidth={180.5}
              />
            </View>
          </>
        )}
      </ScrollView>

      {/* Overlay loading */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.primaryBlue700} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -54,
    marginBottom: 40,
    gap: 12,
    zIndex: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: "500",
  },
  buttonContainer: {
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#ECF1FF",
    position: "absolute",
    bottom: 12,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    zIndex: 10,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 20,
  },
});
