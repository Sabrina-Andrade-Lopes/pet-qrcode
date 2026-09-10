import { View, Text, StyleSheet } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Leitor de QR Code
      </Text>

      <Text style={styles.texto}>
        Em desenvolvimento...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },

  texto: {
    marginTop: 10,
    fontSize: 16,
  },
});