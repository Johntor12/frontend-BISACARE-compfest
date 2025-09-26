import { useAuth } from "@/app/context/AuthContext";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface UploadFileProps {
  namaFile?: string;
  icon?: "upload" | "download";
  uri?: string | null;
  onChange?: (uri: string) => void;
}

export default function UploadFile({
  namaFile = "KTP terbarumu",
  icon = "upload",
  uri,
  onChange,
}: UploadFileProps) {
  const { fetchWithAuth } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const params = useLocalSearchParams<{ imageUri?: string }>();
  const [image, setImage] = useState<string | null>(null);

  const dummyImage = "https://picsum.photos/600/400";

  // const handleDownload = async () => {
  //   if (icon === "download") {
  //     // langsung set dummy image
  //     setImage(dummyImage);
  //     onChange?.(dummyImage);

  //     // otomatis download ke local
  //     try {
  //       const fileUri =
  //         FileSystem.documentDirectory + `${namaFile.replace(/\s+/g, "_")}.jpg`;
  //       const result = await FileSystem.downloadAsync(dummyImage, fileUri);

  //       Alert.alert("Download Berhasil", `File tersimpan di: ${result.uri}`);
  //     } catch (err) {
  //       console.error("Download gagal:", err);
  //       Alert.alert("Error", "Gagal mendownload file");
  //     }
  //   }
  // };

  const openSpotScan = () => {
    router.push({
      pathname: "/screen/spot-scan",
      params: { returnTo: pathname },
    });
  };

  // =====================
  // Dummy download handler
  // =====================
  // const handleDownload = async () => {
  //   try {
  //     // pakai endpoint dummy
  //     const url = `/ajubanding/file-dummy.pdf`;
  //     const response = await fetchWithAuth(url);

  //     if (!response.ok) {
  //       throw new Error(`Gagal download: ${response.status}`);
  //     }

  //     const blob = await response.blob();
  //     const fileReader = new FileReader();

  //     fileReader.onload = async () => {
  //       try {
  //         const base64Data = (fileReader.result as string).split(",")[1];
  //         const fileUri = FileSystem.documentDirectory + `file_dummy.pdf`;

  //         await FileSystem.writeAsStringAsync(fileUri, base64Data, {
  //           encoding: "base64",
  //         });

  //         if (await Sharing.isAvailableAsync()) {
  //           await Sharing.shareAsync(fileUri);
  //         } else {
  //           Alert.alert("Sukses", `File berhasil diunduh ke ${fileUri}`);
  //         }
  //       } catch (err) {
  //         console.error("❌ Error write file:", err);
  //         Alert.alert("Error", "Gagal menyimpan file");
  //       }
  //     };

  //     fileReader.readAsDataURL(blob);
  //   } catch (err: any) {
  //     console.error("❌ Download error:", err);
  //     Alert.alert("Error", "Gagal mengunduh file");
  //   }
  // };

  return (
    <View>
      <Text style={styles.label}>{namaFile}</Text>
      <TouchableOpacity
        style={styles.uploadBox}
        onPress={icon === "upload" ? openSpotScan : () => {}}
      >
        {image && icon === "upload" ? (
          <Image source={{ uri: image }} style={styles.uploadImage} />
        ) : (
          <View style={styles.emptyContent}>
            <Image
              source={
                icon === "upload"
                  ? require("../../../../assets/images/plus.png")
                  : require("../../../../assets/images/ic-download.png")
              }
            />
            {icon === "upload" ? (
              <Text style={styles.uploadText}>
                Scan/Upload {namaFile} {"\n"}Max file size : 10 MB
              </Text>
            ) : (
              <Text style={styles.uploadText}>Download {namaFile}</Text>
            )}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 6,
  },
  uploadBox: {
    borderWidth: 1,
    width: "100%",
    aspectRatio: 362 / 213,
    borderStyle: "dashed",
    borderColor: "#aaa",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  uploadText: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
  },
  uploadImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    aspectRatio: 362 / 213,
  },
  emptyContent: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
});
