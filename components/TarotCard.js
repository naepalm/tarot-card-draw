import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';
import Tarot from '../data/tarot';

class TarotCard extends Component {
  renderCard() {
    var card = require('../assets/images/back.jpg');
    if(this.props.card) {
      card = this.props.card.src;
    }
    console.info(card);
    return card;
  }
  render() {
    return (
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={this.renderCard()} />
        </View>
    );
  }
} 

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 5, 
    alignItems: 'center'
  },
  image: {
    flex: 1,
    height: 75,
    marginVertical: 20,
    marginHorizontal: 30,
    resizeMode: 'contain'
  }
});

export default TarotCard;