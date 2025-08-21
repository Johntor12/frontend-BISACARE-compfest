// src/components/ClaimDetail/ClaimTracker.tsx
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

type Step = { label: string; status: "done" | "active" | "pending" };
export default function ClaimTracker({ steps }: { steps: Step[] }) {
  return (
    <View style={styles.row}>
      {steps.map((s, i) => {
        const isLast = i === steps.length - 1;
        return (
          <View key={s.label} style={{ flex: 1, alignItems: "center" }}>
            <View
              style={[
                styles.dot,
                s.status === "done" && styles.dotDone,
                s.status === "active" && styles.dotActive,
              ]}
            />
            {!isLast && (
              <View
                style={[
                  styles.line,
                  s.status !== "pending" && {
                    backgroundColor: Colors.primary,
                  },
                ]}
              />
            )}
            <Text style={styles.label}>{s.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: Colors.border,
  },
  dotDone: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
  },
  dotActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  line: {
    height: 2,
    backgroundColor: Colors.border,
    position: "absolute",
    top: 11,
    left: "50%",
    right: "-50%",
  },
  label: { marginTop: 8, fontSize: 12, color: Colors.text },
});
