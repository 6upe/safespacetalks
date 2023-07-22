import React from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles, OnboardingImages, styles } from '../../assets/css/Global'


function OnboardingScreen3({ navigation }) {

  const nextScreen = () => {
    navigation.navigate('OnboardingScreen4');
  }
  const prevScreen = () => {
    navigation.navigate('OnboardingScreen2');
  }
  return (
    <View style={GlobalStyles.onboardingContainer}>
     
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={GlobalStyles.onboardingTitle}>Talk to a Therapist</Text>
        <View style={styles.clipArtContainer}>
          <Image source={OnboardingImages.images[7]} resizeMode="contain" style={styles.clipArt} />
        </View>

        <View style={styles.messageUnderClipArtContainer}>
          <Text style={styles.messageUnderClipArt}>Your mental well-being is our priority, and we guarantee complete confidentiality of all your information in our trusted Mental Health Safespace App.</Text>
        </View>

        <View style={styles.twoBtnContainer}>
          <TouchableOpacity style={styles.onboardingButton} onPress={prevScreen}>
            <Text style={GlobalStyles.btnTitle}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.onboardingButton} onPress={nextScreen}>
            <Text style={GlobalStyles.btnTitle}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default OnboardingScreen3

