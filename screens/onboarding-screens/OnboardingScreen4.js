import React from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles, OnboardingImages, styles } from '../../assets/css/Global'


function OnboardingScreen4({ navigation }) {

  const nextScreen = () => {
    console.log('start anonymous chats');
  }

  return (
    <View style={GlobalStyles.onboardingContainer}>
     
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={GlobalStyles.onboardingTitle}>Let's Begin!</Text>
        <View style={styles.clipArtContainer}>
          <Image source={OnboardingImages.images[8]} resizeMode="contain" style={styles.clipArt} />
        </View>

        <View style={styles.messageUnderClipArtContainer}>
          <Text style={styles.messageUnderClipArt}>Mental Heath is our #1 Priority</Text>
        </View>


          <TouchableOpacity style={GlobalStyles.onboardingButton} onPress={nextScreen}>
            <Text style={GlobalStyles.btnTitle}>Chat Anonymous!</Text>
          </TouchableOpacity>

      </View>

    </View>
  )
}

export default OnboardingScreen4

