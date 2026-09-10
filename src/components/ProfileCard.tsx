import { StyleSheet, Text, View, Image, ImageSourcePropType, useColorScheme } from "react-native";

interface ProfileCardProps {
  nombre: string;
  cargo: string;
  imagen: ImageSourcePropType;
}

export default function ProfileCard(props: ProfileCardProps) {
  const { nombre, cargo, imagen } = props;
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={[styles.card, isDarkMode ? styles.cardDark : styles.cardLight]}>
      <Image
        style={[styles.profileImage, isDarkMode ? styles.imageBorderDark : styles.imageBorderLight]}
        source={imagen}
      />
      <Text style={[styles.title, isDarkMode ? styles.titleDark : styles.titleLight]}>
        {nombre}
      </Text>
      <Text style={[styles.subtitle, isDarkMode ? styles.subtitleDark : styles.subtitleLight]}>
        {cargo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8,
    // Sombra para Android
    elevation: 3,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  cardLight: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  cardDark: {
    backgroundColor: "#1E1E1E",
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
    borderWidth: 3,
  },
  imageBorderLight: {
    borderColor: "#E3E8EF",
  },
  imageBorderDark: {
    borderColor: "#333942",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  titleLight: {
    color: "#1A202C",
  },
  titleDark: {
    color: "#F7FAFC",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  subtitleLight: {
    color: "#718096",
  },
  subtitleDark: {
    color: "#A0AEC0",
  },
});