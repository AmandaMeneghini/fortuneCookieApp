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

        <Text style={styles.textPhase}>Alguma frase</Text>

        <TouchableOpacity style={styles.button}>
          <View style={styles.btnAre}>
            <Text style={styles.btnText}>
              Abrir biscoito
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
  },
  img: {
    width: 250,
    height: 250
  },
});

export default App;
