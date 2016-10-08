import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';
import FlipCard from 'react-native-flip-card';
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
          <FlipCard
            style={styles.card}
            friction={10}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={this.props.isFlipped}>
            {/* Face Side */}
            <View style={styles.imageItem}>
              <Image style={styles.image} source={this.props.card.src} />
            </View>
            {/* Back Side */}
            <View style={styles.imageItem}>
              <Image style={styles.image} source={require('../assets/images/back.jpg')} />
            </View>
          </FlipCard>
        </View>
    );
  }
} 

const styles = StyleSheet.create({
  card: {
    borderColor: 'transparent'
  },
  imageWrapper: {
    flex: 5, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageItem: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: 400,
    resizeMode: 'contain'
  }
});

export default TarotCard;