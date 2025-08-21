// src/components/ClaimDetail/SymptomsTabs.tsx
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function SymptomsTabs({ tabs }: { tabs: string[] }) {
  return (
    <View style={styles.row}>
      {tabs.map((t, i) => (
        <View key={t} style={[styles.pill, i === 0 && styles.pillActive]}>
          <Text style={[styles.pillText, i === 0 && styles.pillTextActive]}>
            {t}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 8, marginBottom: 10 },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#ECF0F4",
  },
  pillActive: { backgroundColor: Colors.primaryLight },
  pillText: { color: Colors.muted, fontWeight: "700", fontSize: 12 },
  pillTextActive: { color: Colors.primary },
});
