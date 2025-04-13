import React, { Component } from 'react'; 
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity, 
  Image,
  } from 'react-native'; 

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textPhase: '',
      img: require('./src/images/biscuit.png'),
    };

    this.brokenBiscuit = this.brokenBiscuit.bind(this);
    
    this.phases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso e a menor distancia entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso e o medo do fracasso.'
    ];
  }

  brokenBiscuit(){
    let randomNumber = Math.floor(Math.random() * this.phases.length);

    this.setState({
      textPhase: '"' +  this.phases[randomNumber] + '"',
      img: require('./src/images/openBiscuit.png'),
    })

  }

  render() {
    return(
      <View style={styles.container}>
        <Image 
        source={this.state.img}
        style={styles.img}
        />

        <Text style={styles.textPhase}>{this.state.textPhase}</Text>

        <TouchableOpacity style={styles.button} onPress={this.brokenBiscuit}>
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
