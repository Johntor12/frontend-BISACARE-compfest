import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CustomButtonProps {
  label: string;
  onPress?: () => void;
  customWidth?: number;
}

const CustomButton = ({ label, onPress, customWidth }: CustomButtonProps) => {
  const buttonWidth = useMemo(() => {
    return customWidth || 179; // Default width if customWidth is not provided
  }, [customWidth]);
  return useMemo(() => {
    return (
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          { width: buttonWidth },
        ]}
        onPress={onPress}
      >
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }, [label, onPress]);
};

const styles = StyleSheet.create({
  buttonContainer: {
    aspectRatio: 129 / 48,
    borderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "#005D85",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
    gap: 8,
    overflow: "hidden",
  },
  buttonLabel: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  iconContainer: {
    width: 20,
    height: 20,
    position: "relative",
    overflow: "hidden",
  },
});

export default CustomButton;
