import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';

class Button extends Component {
    render() {
        return (
            <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback disabled={this.props.disableButton} background={TouchableNativeFeedback.Ripple('white', false)} onPress={this.props.onButtonPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{this.props.text}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 50,
        width: 260,
        marginVertical: 10,
        marginHorizontal: 30,
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    buttonText: {
        margin: 10,
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    }
});

export default Button;