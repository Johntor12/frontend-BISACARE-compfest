import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface UploadFileProps {
  namaFile?: string;
  icon?: "upload" | "download";
  uri?: string | null;
  onChange?: (uri: string) => void; // callback ke parent
}

export default function UploadFile({
  namaFile = "KTP terbarumu",
  icon = "upload",
  uri,
  onChange,
}: UploadFileProps) {
  const router = useRouter();
  const pathname = usePathname(); // <- ambil path parent aktif
  const params = useLocalSearchParams<{ imageUri?: string }>();
  const [image, setImage] = useState<string | null>(null);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: "images",
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 0.7,
  //   });

  //   if (!result.canceled) {
  //     const uri = result.assets[0].uri;
  //     setImage(uri);
  //     onChange?.(uri);
  //   }
  // };

  useEffect(() => {
    if (params.imageUri) {
      setImage(params.imageUri);
      onChange?.(params.imageUri);
    }
  }, [params.imageUri]);

  const openSpotScan = () => {
    router.push({
      pathname: "/screen/spot-scan",
      params: { returnTo: pathname }, // <- kirim parent path
    });
  };

  return (
    <View>
      <Text style={styles.label}>{namaFile}</Text>
      <TouchableOpacity style={styles.uploadBox} onPress={openSpotScan}>
        {image ? (
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
              <Text style={styles.uploadText}>
                Download {namaFile} {"\n"}Max file size : 10 MB
              </Text>
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
