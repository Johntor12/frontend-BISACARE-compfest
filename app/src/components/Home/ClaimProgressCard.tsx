// src/components/ClaimDetail/ClaimProgressCard.tsx
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function ClaimProgressCard({
  progress = 50,
}: {
  progress?: number;
}) {
  const router = useRouter();
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Progress Klaim{"\n"}Asuransi Kesehatan</Text>
        <Pressable
          onPress={() => {
            router.push("/screen/input-keluhan");
          }}
          style={({ pressed }) => [styles.cta, pressed && { opacity: 0.8 }]}
        >
          <Text style={styles.ctaText}>LANJUT KLAIM</Text>
          <Text style={styles.ctaArrow}>↗</Text>
        </Pressable>
      </View>
      {/* indikator bulat 50% */}
      <View style={styles.ringWrap}>
        <View style={styles.ringBg} />
        <Text style={styles.percent}>{progress}%</Text>
      </View>
    </View>
  );
}

const SIZE = 76;
const THICK = 10;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: { color: "#fff", fontWeight: "800", fontSize: 16, marginBottom: 10 },
  cta: {
    alignSelf: "flex-start",
    backgroundColor: "#0B5FA0",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ctaText: { color: "#fff", fontWeight: "800", letterSpacing: 0.3 },
  ctaArrow: { color: "#fff", fontSize: 16, marginTop: -2 },
  ringWrap: {
    width: SIZE,
    height: SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  ringBg: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: THICK,
    borderColor: Colors.primaryLight,
    borderRightColor: Colors.primary,
    transform: [{ rotateZ: "45deg" }],
  },
  percent: { color: "#fff", fontWeight: "900", fontSize: 16 },
});
