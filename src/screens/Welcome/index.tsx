import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

const WelcomeScreen = () => {
  const { height, width } = useWindowDimensions(); 
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../img/img1.png")}
          style={[styles.logo, { height, width }]} 
          resizeMode="stretch" 
        />
      </View>

   
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadScreen')}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', 
  },
  imageContainer: {
    flex: 1,
  },
  logo: {
    flex: 1, 
  },
  buttonContainer: {
    position: 'absolute', 
    bottom: 40,
    width: '100%', 
    alignItems: 'center', 
  },
  button: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default WelcomeScreen;