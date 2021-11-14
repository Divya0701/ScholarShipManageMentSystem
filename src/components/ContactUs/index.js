import { Tooltip } from '@material-ui/core';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  TouchableWithoutFeedback,
  Alert,

} from 'react-native';
// import {
//     openComposer
//  } from "react-native-email-link";

export default class ContactUs extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  toggleOpen = () => {

    if (this._open) {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000,
      }).start();

    } else {

      Animated.timing(this.state.animation, {
        toValue: 0.9,
        duration: 500,
      }).start();
    }
    this._open = !this._open

  };
  render() {
    const printInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -90],
    });
    const saveInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -80, -170],
    });

    const printStyle = {
      transform: [
        {
          translateY: printInterpolate,
        },
      ],
    };

    const saveStyle = {
      transform: [
        {
          translateY: saveInterpolate,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.background]}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('saveIconn')}>
            <Animated.View style={[styles.button, saveStyle]}>
            <Tooltip className="text-lg" placement="left-start" title="CallUs on +91 9134578282">
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={{
                  uri: "https://img.icons8.com/flat-round/64/000000/phone.png",
                }}
              />
              </Tooltip>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('printIcon')}>
            <Animated.View style={[styles.button, printStyle]}>
            <Tooltip placement="left-start" title="MailUs to support@gmail.com">
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={{
                  uri:
                    'https://img.icons8.com/color/48/000000/apple-mail.png',
                }}
                />
                </Tooltip>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.toggleOpen()}>
            <Animated.View style={[styles.button]}>
                <Tooltip title="Get in touch!"placement="left-start">
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={{ uri:"https://img.icons8.com/color/48/000000/about-us-female.png" }}
              />
              </Tooltip>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  background: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 2,
    right: -2,
    alignItems: 'center',
    alignSelf: 'center',
    shadowRadius: 4,
    shadowOpacity: 2,
    borderRadius: 30,
    borderBottomColor: 12,
    width: 50,
    height: 50,
    cursor: "help"
    
  },
  iconStyle: {
    width: 40,
    height: 40,
    paddingTop:20
  },
  tooltip :{
    fontSize:"500px"
  }
});