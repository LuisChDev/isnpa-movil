// @ts-ignore
import bknd from './assets/vintageBackground.jpg';

import React from 'react';
import { Text, ImageBackground, TouchableOpacity, TextInput, View } from 'react-native';
import { styles } from './styles/loginStyle';
import Banner from './banner';

/**
 * componente de registro.
 */
export default ({ navigation }) => (
  <ImageBackground source={bknd} style={styles.container}>
      <Banner/>

      <Text style={styles.label}>Nombre de usuario</Text>
      <TextInput
        style={styles.entradaTexto}
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.entradaTexto}
      />


      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.entradaTexto}
        secureTextEntry
      />

      <Text style={styles.label}>Confirmar Contraseña</Text>
      <TextInput
        style={styles.entradaTexto}
        secureTextEntry
      />

      <View style={styles.loginButtons}>
          <TouchableOpacity
            onPress={() => alert("Dinero")}
            style={styles.ingresarButton}>
              <Text style={styles.buttonText}>
                  Registrarse
              </Text>
          </TouchableOpacity>
      </View>

      <Text style={[styles.welcome,
                    styles.registerButton]}>
          Ya tienes una cuenta?</Text>
      <TouchableOpacity style={[styles.ingresarButton, styles.registerButton]}
                        onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Ingresa</Text>
      </TouchableOpacity>
  </ImageBackground>
)
