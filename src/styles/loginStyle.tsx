import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBB',
    paddingTop: 23,
  },

  logo: {
    width: 200,
    height: 200,
  },

  logoText: {
    position: "absolute",
    marginLeft: 200,
    marginTop: 170,
    fontFamily: "texGyreChorus",
    fontSize: 50,
    color: "lightgrey",
  },

  logoSubText: {
    position: "absolute",
    marginLeft: 30,
    marginTop: 220,
    fontFamily: "texGyreBold",
    fontSize: 30,
    color: "lightgrey",
  },

  textContainer: {
    marginTop: 300,
    width: "100%",
    position: "absolute",
    flex: 1,
  },

  welcome: {
    color: '#AAA',
    fontSize: 20,
  },

  label: {
    color: "white",
  },

  loginButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  ingresarButton: {
    margin: 20,
    backgroundColor: 'goldenrod',
    borderRadius: 10,
    padding: 10,
    alignSelf: "flex-start",
    width: "auto",
  },

  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: '#fff',
  },

  socialIcon: {
    width: 50,
    height: 50,
    margin: 20,
  },

  entradaTexto: {
    borderColor: "gold",
    color: "white",
    borderWidth: 1
  },

  registerButton: {
    alignSelf: "flex-end",
  },
});

export { styles };
