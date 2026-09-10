import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";

export default function CompanyHeader() {

  const isDarkMode = useColorScheme() === "dark";

  const logoSource = isDarkMode ? require("../assets/images/LuminaDark.png") 
  : require("../assets/images/LuminaLight.png"); //

  return (
    <View style={styles.container}>
      <Image
        source={logoSource}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text style={[styles.slogan, isDarkMode ? styles.sloganDark : styles.sloganLight]}>
        Engineered for Power and Motion
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60, // Hace la imagen perfectamente circular (120 / 2)
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  slogan: {
    marginTop: 14,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    textAlign: "center",
  },
  sloganLight: {
    color: "#4A5568", // Gris oscuro moderno para modo claro
  },
  sloganDark: {
    color: "#A0AEC0", // Tono gris neutro legible para fondo oscuro
  },
});