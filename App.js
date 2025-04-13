import React, { Component } from 'react'; 
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity, 
  Image,
  } from 'react-native'; 

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Image 
        source={require('./src/images/biscuit.png')}
        style={styles.img}
        />

        <Text style={styles.textPhase}>"Alguma Frase Aqui"</Text>

        <TouchableOpacity style={styles.button}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>
              Quebrar biscoito
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250
  },
  textPhase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25 
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
