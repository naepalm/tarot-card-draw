/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import Tarot from './data/tarot';
import * as Helpers from './utils/Helpers';
import Button from './components/Button';
import TarotCard from './components/TarotCard';

class TarotCardDraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: false,
      isFlipped: true,
      disableButton: false,
    };
  }
  getRandomCard() {
    if (Tarot && Tarot.length) {
      var index = Helpers.getRandomInt(0, Tarot.length);
      this.setState({card: Tarot[index]});
    }
  }
  onButtonPress() {
    // If it's the first card, just flip it from back to front
    if (this.state.isFlipped) {
      this.getRandomCard();
      this.setState({ isFlipped: !this.state.isFlipped, disableButton: true }); 
      setTimeout(function(){ 
        this.setState({disableButton: false});
      }.bind(this), 500);
    // If it's not the first card, flip it to the back, then the front again
    } else {
      this.setState({ isFlipped: !this.state.isFlipped, disableButton: true })
      setTimeout(function(){ 
        this.getRandomCard();
      }.bind(this), 500);
      setTimeout(function(){
        if(this.state.isFlipped) {
          this.setState({ isFlipped: !this.state.isFlipped, disableButton: false }); 
        }
      }.bind(this), 1500)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TarotCard card={this.state.card} isFlipped={this.state.isFlipped} />
        <Button text="Draw a Card" disableButton={this.state.disableButton} onButtonPress={() => this.onButtonPress()} />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('TarotCardDraw', () => TarotCardDraw);
