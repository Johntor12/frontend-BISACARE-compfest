import { ScrollView, StyleSheet } from "react-native";
import ClaimCard from "../src/components/Home/ClaimCard";
import ComplaintCard from "../src/components/Home/ComplaintCard";
import ProgressCard from "../src/components/Home/ProgressCard";
import TestimonialCard from "../src/components/Home/TestimonialCard";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <ClaimCard />
      <ComplaintCard />
      <ProgressCard />
      <TestimonialCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 16,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
    color: "#007AFF",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
});
