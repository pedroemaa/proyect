import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function App({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleCrearCuentaMail = () => {
    navigation.navigate("Crear Cuenta Mail");
  };
  const handlePuesto = () => {
    navigation.navigate("Crear Puesto Empleo"); // Corregir el nombre de la pantalla
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.general}>
          <StatusBar style="auto" />
          <View style={styles.blueSquare} />

          <View
            style={[
              styles.circle,
              {
                width: circleSize,
                height: circleSize,
                borderRadius: circleSize * 0.5,
              },
            ]}
          >
            <Image
              style={styles.image}
              resizeMode={"center"} // Puedes usar "cover" para cubrir el círculo
              source={require("./assets/IMG_1433.jpg")}
            />
          </View>
          <Text style={styles.txtImagenes}>Bienvenido a Hiring</Text>
          <Text style={styles.buttonText}>
            La app ideal para vos que necesitas buscar a profesionales del oficio,
            con tan solo un click podes buscar entre miles de ellos y los que
            esten mas cerca de tu casa
          </Text>
          <TouchableOpacity
            style={styles.buttonCrearPuesto}
            onPress={handlePuesto}
          >
            <Text style={styles.txtcontinuar}>Crear puesto de empleo</Text>
          </TouchableOpacity>
          <ImageBackground
            source={require("./assets/fondoabajo3.png")}
            resizeMode={"stretch"}
            style={styles.fondo}
          >
            <View style={styles.botones}>
              <TouchableOpacity
                style={styles.buttonCrear}
                onPress={handleCrearCuentaMail}
              >
                <Text style={styles.txtcontinuar}>Crear Cuenta</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.buttonIniciar}
                onPress={handleLogin}
              >
                <Text style={styles.txtcontinuar}>Iniciar Sesion</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const circleSize = 300; // Tamaño del círculo (ancho y alto)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueSquare: {
    flex: 1,
    width: "140%",
    height: "160%",
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    top: -40,
    left: 0,
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize * 0.5,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "130%",
  },
    fondo: {
      flex: 1,
      width: "100%",
      height: "120%",
    },
  
    txtImagenes: {
      fontSize: 74,
      fontWeight: "semibold",
      marginLeft: 10,
      alignSelf: "center",
    },
    botones: {
      flexDirection: "row",
      marginLeft: 30,
      justifyContent: "flex-start",
    },
    BotonImagenes: {
      flex: 1,
      alignItems: "center",
      alignSelf: "center",
      marginTop: -100,
      width: "10%",
      justifyContent: "flex-start",
    },
  
    buttonText: {
      color: "#635C5C",
      fontSize: 18,
      justifyContent: "center",
      marginLeft: 15,
    },
  
    txtcontinuar: {
      color: "white",
      fontSize: 20,
      textAlign: "center",
      marginTop: 0,
      fontWeight: "bold",
    },
    buttonCrear: {
      alignSelf: "center",
      fontSize: 10,
      marginTop: 200,
      width: "47%",
      height: 50,
      borderRadius: 14,
      padding: 10,
      marginLeft: -20,
      backgroundColor: "#0B6EFE",
    },
    buttonCrearPuesto: {
      alignSelf: "center",
      fontSize: 10,
      width: "47%",
      height: 50,
      borderRadius: 14,
      padding: 10,
      marginLeft: -20,
      backgroundColor: "#0B6EFE",
    },
    buttonIniciar: {
      marginLeft: 30,
      fontSize: 10,
      marginTop: 200,
      width: "47%",
      height: 50,
      borderRadius: 14,
      padding: 10,
      backgroundColor: "#0B6EFE",
    },
  });
  