import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import QRCode from "react-native-qrcode-svg";

export default function HomeScreen() {
  const [animal, setAnimal] = useState("Cachorro");

  const [nomePet, setNomePet] = useState("");
  const [idadePet, setIdadePet] = useState("");
  const [vacina, setVacina] = useState("");
  const [raca, setRaca] = useState("");

  const [nomeTutor, setNomeTutor] = useState("");
  const [idadeTutor, setIdadeTutor] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const [qrValue, setQrValue] = useState("");

  function removerAcentos(texto: string) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function gerarQRCode() {
    const idPet = Date.now();

    const dados = `
ID: ${idPet}

PET
Animal: ${removerAcentos(animal)}
Nome: ${removerAcentos(nomePet)}
Idade: ${idadePet}
Vacina: ${removerAcentos(vacina)}
Raca: ${removerAcentos(raca)}

TUTOR
Nome: ${removerAcentos(nomeTutor)}
Idade: ${idadeTutor}
Telefone: ${telefone}
Endereco: ${removerAcentos(endereco)}
`.trim();

    setQrValue(dados);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text style={styles.titulo}>Cadastro do Pet</Text>

        <Text style={styles.label}>Animal</Text>

        <View style={styles.animaisContainer}>
          {[
            "Cachorro",
            "Gato",
            "Coelho",
            "Pássaro",
            "Hamster",
            "Outro",
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.animalBotao,
                animal === item && styles.animalSelecionado,
              ]}
              onPress={() => setAnimal(item)}
            >
              <Text
                style={[
                  styles.animalTexto,
                  animal === item && styles.animalTextoSelecionado,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Nome do Pet</Text>
        <TextInput
          style={styles.input}
          value={nomePet}
          onChangeText={setNomePet}
          placeholder="Digite o nome do pet"
        />

        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          value={idadePet}
          onChangeText={setIdadePet}
          keyboardType="numeric"
          placeholder="Digite a idade"
        />

        <Text style={styles.label}>Vacina</Text>
        <TextInput
          style={styles.input}
          value={vacina}
          onChangeText={setVacina}
          placeholder="Informe as vacinas"
        />

        <Text style={styles.label}>Raça</Text>
        <TextInput
          style={styles.input}
          value={raca}
          onChangeText={setRaca}
          placeholder="Digite a raça"
        />

        <Text style={styles.titulo}>Tutor</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nomeTutor}
          onChangeText={setNomeTutor}
          placeholder="Nome do tutor"
        />

        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          value={idadeTutor}
          onChangeText={setIdadeTutor}
          keyboardType="numeric"
          placeholder="Idade do tutor"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          placeholder="Telefone"
        />

        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
          placeholder="Endereço completo"
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={gerarQRCode}
        >
          <Text style={styles.textoBotao}>
            Gerar QR Code
          </Text>
        </TouchableOpacity>

        {qrValue !== "" && (
          <View style={styles.qrContainer}>
            <QRCode
              value={qrValue}
              size={280}
              ecl="H"
            />

            <Text style={styles.info}>
              QR Code gerado com sucesso
            </Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fff",
  },

  animaisContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 10,
  },

  animalBotao: {
    borderWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  animalSelecionado: {
    backgroundColor: "#2196F3",
  },

  animalTexto: {
    color: "#2196F3",
    fontWeight: "600",
  },

  animalTextoSelecionado: {
    color: "#fff",
  },

  botao: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  qrContainer: {
    marginTop: 35,
    alignItems: "center",
    marginBottom: 80,
  },

  info: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});