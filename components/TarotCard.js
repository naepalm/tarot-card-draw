import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';
import Tarot from '../data/tarot';

class TarotCard extends Component {
  
  render() {
    return (
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={this.props.card.src} />
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