import React from 'react';
import {
  Image, Text, View, TouchableOpacity,
  ImageBackground, TextInput
} from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// other components
import RegisterSrc from './register';

/* assets */
// @ts-ignore
import logo from './assets/clipart.png';
// @ts-ignore
import bknd from './assets/vintageBackground.jpg';
// @ts-ignore
import fbLogo from './assets/Facebook-Vector-Icon.png';
// @ts-ignore
import googleLogo from './assets/googleLogo.png';
// @ts-ignore
import twitterLogo from './assets/twitterLogo.png';

/* CSS */
import { styles } from './styles/loginStyle';

/**
 * Crea el stack de navegación
 */
const Stack = createStackNavigator();

/**
 * pantalla principal de la app.
 */
const LogScreen = ({ navigation }) => (
  <ImageBackground source={bknd} style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>

      <Text style={styles.logoText}> ISNPA </Text>
      <Text style={styles.logoSubText}>Gestor de finanzas</Text>

      <View style={styles.textContainer}>
          <Text style={styles.welcome}>
              Bienvenido a nuestra app.
              aquí podrá mantener sus balances financieros.
          </Text>

          <Text style={styles.label}>Nombre de usuario</Text>
          <TextInput
            style={styles.entradaTexto}
          />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.entradaTexto}
            secureTextEntry
          />

          <View style={styles.loginButtons}>
              <TouchableOpacity
                onPress={() => alert("Dinero")}
                style={styles.ingresarButton}>
                  <Text style={styles.buttonText}>
                      Ingresar
                  </Text>
              </TouchableOpacity>

              <Image source={fbLogo} style={styles.socialIcon} />
              <Image source={googleLogo} style={styles.socialIcon}></Image>
              <Image source={twitterLogo} style={styles.socialIcon}></Image>
          </View>

          <Text style={[styles.welcome,
                        styles.registerButton,
                        { marginRight: 20 }]}>¿Aún no tienes una cuenta?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[styles.ingresarButton, styles.registerButton]}>
              <Text style={styles.buttonText}>¡Regístrate ahora!</Text>
          </TouchableOpacity>

      </View>
  </ImageBackground>
)


/**
 * inicializa la app, carga las fuentes y muestra los
 * componentes navegables.
 */
export default () => {
  let [fontsLoaded] = useFonts({
    'texGyreRegular': require('./assets/tex-gyre-cursor.regular.otf'),
    'texGyreBold': require('./assets/tex-gyre-cursor.bold.otf'),
    'texGyreChorus': require('./assets/texgyrechorus-mediumitalic.otf'),
  })

  if (!fontsLoaded) {
    return (<AppLoading />);
  } else {
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Login" component={LogScreen} />
              <Stack.Screen name="Register" component={RegisterSrc} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
