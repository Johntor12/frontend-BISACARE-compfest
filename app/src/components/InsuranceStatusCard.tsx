import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Colors from "../constants/Colors";

interface PercentageCardProps {
  title: string;
  percentage: number;
  onDetailPress?: () => void;
}

const PercentageCard = ({
  title,
  percentage,
  onDetailPress,
}: PercentageCardProps) => {
  const radius = 24;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <LinearGradient
      colors={["rgba(217,217,217,0.14)", "rgba(115,115,115,0.14)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Percentage */}
      <Text style={styles.percentage}>{percentage}%</Text>

      {/* Detail Button */}
      <TouchableOpacity style={styles.detailButton} onPress={onDetailPress}>
        <Text style={styles.detailText}>Detail</Text>
      </TouchableOpacity>

      {/* Circular Progress */}
      <View style={styles.progressWrapper}>
        <Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
          <Circle
            stroke="#F7F2FF"
            fill="none"
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke="#BB94FF"
            fill="none"
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </Svg>
      </View>
    </LinearGradient>
  );
};

const PercentageCards: React.FC = () => {
  const handleDetailPress = (cardType: string) => {
    console.log(`Detail pressed for ${cardType}`);
  };

  return (
    <View style={styles.row}>
      <PercentageCard
        title="Ditanggung"
        percentage={80}
        onDetailPress={() => handleDetailPress("Ditanggung")}
      />
      <PercentageCard
        title="Tanggung Sendiri"
        percentage={40}
        onDetailPress={() => handleDetailPress("Tanggung Sendiri")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  card: {
    width: 171,
    height: 120,
    borderRadius: 15,
    padding: 10,
    position: "relative",
    overflow: "hidden",
  },
  title: {
    position: "absolute",
    left: 10,
    top: 17,
    fontSize: 14,
    fontWeight: "bold",
    color: "#2E2E30",
    maxWidth: 85,
  },
  percentage: {
    position: "absolute",
    left: 15,
    top: 60,
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  detailButton: {
    position: "absolute",
    right: 10,
    top: 9,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: Colors.primaryBlue700,
    borderRadius: 8,
  },
  detailText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  progressWrapper: {
    position: "absolute",
    right: 15,
    top: 52,
  },
});

export default PercentageCards;
