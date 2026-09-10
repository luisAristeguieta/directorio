import { StyleSheet, Text, View, FlatList, TextInput, useColorScheme } from "react-native";
import ProfileCard from "./ProfileCard";

const EMPLEADOS = [
  {
    id: "1",
    nombre: "Luis Jimenez",
    cargo: "Gerente General de Ventas",
    fotoUrl: "https://cdn.create.vista.com/api/media/small/191298750/stock-photo-businessman-working-on-the-floor-at-home"
  },
  {
    id: "2",
    nombre: "Ana Gonzáles",
    cargo: "Especialista en Financiamiento Automotriz",
    fotoUrl: "https://cdn.create.vista.com/api/media/small/255309356/stock-photo-attractive-woman-sitting-table-laptop-smiling-looking-camera"
  },
  {
    id: "3",
    nombre: "Alberto Guerra",
    cargo: "Jefe de Taller y Servicio Técnico",
    fotoUrl: "https://cdn.create.vista.com/api/media/small/188227026/stock-photo-sick-businessman-working-from-home-due-to-flu-sickness"
  },
  {
    id: "4",
    nombre: "María León",
    cargo: "Asesora Comercial de Vehículos Nuevos",
    fotoUrl: "https://cdn.create.vista.com/api/media/medium/410285684/stock-photo-excited-freelancer-looking-camera-while-sitting-couch-kitchen-laptop?token="
  },
  {
    id: "5",
    nombre: "Carlos Mendoza",
    cargo: "Consultor de Flotas Corporativas",
    fotoUrl: "https://cdn.create.vista.com/api/media/medium/278240252/stock-photo-handsome-asian-man-talking-smartphone-smiling-camera-while-sitting-workplace?token="
  },
  {
    id: "6",
    nombre: "Sofía Herrera",
    cargo: "Coordinadora de Experiencia al Cliente y Entregas",
    fotoUrl: "https://cdn.create.vista.com/api/media/small/233899372/stock-photo-young-asian-businesswoman-headset-using-laptop-workplace"
  }
];

export default function EmploeyeeList() {

  const isDarkMode = useColorScheme() === "dark"; // Detectara el color del sistema

  return (
    <View style={styles.container}>
      <Text style={[styles.title, isDarkMode ? styles.titleDark : styles.titleLight] }>Directorio de Empleados</Text>
      <TextInput
        style={[styles.input, isDarkMode ? styles.inputDark : styles.inputLight]}
        placeholder="Buscar Empleados..."
        placeholderTextColor={isDarkMode ? "#777" : "#999"}
      />
      <FlatList
        data={EMPLEADOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ProfileCard
            nombre={item.nombre}
            cargo={item.cargo}
            imagen={{ uri: item.fotoUrl }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  titleLight: {
    color: "#0d0c0c",
  },
  titleDark: {
    color: "#fff",
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 10,
    paddingVertical: 8,
    color: "#fff",
  },
  inputLight: {
    backgroundColor: "#F3F4F6",
    borderColor: "#E5E7EB",
    color: "#111827", // Texto oscuro para modo claro
  },
  inputDark: {
    backgroundColor: "#1E1E1E",
    borderColor: "#2E2E2E",
    color: "#FFFFFF", // Texto blanco para modo oscuro
  },
  listContent: {
    paddingBottom: 80, // Espacio extra para que la última tarjeta libre los botones de Android
  },
});