// app/claim-detail.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ClaimProgressCard from "../src/components/Home/ClaimProgressCard";
import ClaimStats from "../src/components/Home/ClaimStats";
import ClaimTracker from "../src/components/Home/ClaimTracker";
import CommunityCarousel from "../src/components/Home/CommunityCarousel";
import FloatingChat from "../src/components/Home/FloatingChat";
import SlipCard from "../src/components/Home/SlipCard";
import SymptomsList from "../src/components/Home/SymptompsList";
import SymptomsTabs from "../src/components/Home/SymptomsTabs";
import TestimonialCard from "../src/components/Home/TestimonialCard";
import Colors from "../src/constants/Colors";

export default function ClaimDetailScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg }}>
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.sub}>
          Stay updated with the progress of claim.{"\n"}Reach out to us for any
          help!
        </Text>
        {/* <Image
          source={require("../assets/images/hero-claim.png")}
          style={styles.heroArt}
          resizeMode="contain"
        /> */}
      </View>

      <ScrollView
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress Klaim */}
        <View style={{ marginBottom: 40 }}>
          <ClaimProgressCard progress={60} />
        </View>

        {/* Claim Tracker */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Claim Tracker</Text>
          <ClaimTracker
            steps={[
              { label: "Dikirim", status: "done" },
              { label: "Review", status: "done" },
              { label: "Diterima", status: "active" },
              { label: "Ditolak", status: "pending" },
            ]}
          />
        </View>

        {/* Slip digital & Aju banding */}
        <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
          <SlipCard title="Slip Digital" />
          <SlipCard title="Aju Banding" />
        </View>

        {/* Stats 2 kartu donut */}
        <ClaimStats
          items={[
            { title: "Ditanggung", percent: 80 },
            { title: "Tanggung\nSendiri", percent: 80 },
          ]}
        />

        {/* Keluhan/Gejala */}
        <View style={{ marginTop: 16 }}>
          <Text style={styles.sectionBig}>Keluhan atau Gejala Terakhir</Text>
          <SymptomsTabs
            tabs={["Diajukan", "Diproses", "Ditanggung", "Ditolak"]}
          />
          <SymptomsList
            items={[
              "Heart Failure Indication",
              "Heart Failure Indication",
              "Heart Failure Indication",
              "Heart Failure Indication",
              "Heart Failure Indication",
            ]}
          />
        </View>

        {/* Layanan Komunitas */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.sectionBig}>Layanan Komunitas!</Text>
          <CommunityCarousel />
        </View>

        {/* CTA Lihat Selengkapnya */}
        <View style={{ alignItems: "center", marginTop: 16 }}>
          <View style={styles.ctaOutline}>
            <Text style={styles.ctaText}>Lihat Selengkapnya</Text>
            <Text style={styles.ctaArrow}>↗</Text>
          </View>
        </View>

        {/* Testimoni */}
        <View style={{ marginTop: 24 }}>
          <TestimonialCard />
        </View>
      </ScrollView>

      {/* Tombol chat mengambang */}
      <FloatingChat />
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 56,
  },
  hello: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },
  sub: {
    color: "#EAF7FF",
    lineHeight: 18,
  },
  heroArt: {
    position: "absolute",
    right: 0,
    bottom: -12,
    width: 180,
    height: 120,
    opacity: 0.9,
  },
  sectionCard: {
    marginTop: -12,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  sectionTitle: { fontWeight: "700", color: Colors.text, marginBottom: 12 },
  sectionBig: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.textDark,
    marginBottom: 10,
  },
  caption: { color: Colors.muted, marginBottom: 12 },
  ctaOutline: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.primary500,
    backgroundColor: "#fff",
    gap: 8,
  },
  ctaText: { color: Colors.primary500, fontWeight: "700" },
  ctaArrow: { color: Colors.primary500, fontSize: 16, marginTop: -2 },
});
