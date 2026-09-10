import { View, Image, Text, StyleSheet } from "react-native";


export default function ProfileCard2() {
    return (
        <View style={estilos.card}>
            <Image style={estilos.profileImage}
            source={require("../assets/images/Trabajador copy.jpg")}
            />
            <Text style={estilos.title}>Titulo # 1</Text>
            <Text style={estilos.subtitle}>Titulo # 2</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: "green",
        padding: 20,
        borderRadius: 16,
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10,
        // Sombra para Android
        elevation: 4,
        // Sombra para iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    profileImage: {
        width: 110,
        height: 110,
        borderRadius: 55, // Crea el recorte circular
        marginBottom: 14,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
    },

})