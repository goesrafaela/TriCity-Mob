import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ConfirmationScreen: React.FC = () => {
  const [code, setCode] = useState("");

  const handleContinue = () => {
    // Lógica para continuar, como enviar o código para o backend
    console.log("Código digitado:", code);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Digite os 4 números enviados para o seu celular
      </Text>
      <Text style={styles.title}>+551199624-2915</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={(text) => setCode(text)}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={(text) => setCode(code + text)}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={(text) => setCode(code + text)}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={(text) => setCode(code + text)}
        />
      </View>
      <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
      <Text>Não recebi o código, aguarde para solicitar novamente (0:59)</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#6961FE",
  },
  input: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
    margin: 5,
  },
  continueButton: {
    backgroundColor: "#6961FE",
    padding: 15,
    
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default ConfirmationScreen;
