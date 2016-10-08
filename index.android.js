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
      card: Tarot[0]
    };
  }
  getRandomCard() {
    if (Tarot && Tarot.length) {
      var index = Helpers.getRandomInt(0, Tarot.length);
      console.info("Index", index);
      this.setState({card: Tarot[index]});
    }
  }
  onButtonPress() {
    this.getRandomCard();
  }
  render() {
    console.info("Data?", Tarot);
    console.info("State", this.state);
    return (
      <View style={styles.container}>
        <TarotCard card={this.state.card} />
        <Button text="Draw a Card" onButtonPress={() => this.onButtonPress()} />
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
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('TarotCardDraw', () => TarotCardDraw);
