import React from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles, OnboardingImages, styles } from '../../assets/css/Global'


function OnboardingScreen2({ navigation }) {

  const nextScreen = () => {
    navigation.navigate('OnboardingScreen3');
  }
  const prevScreen = () => {
    navigation.navigate('OnboardingScreen1');
  }
  return (
    <View style={GlobalStyles.onboardingContainer}>
     
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={GlobalStyles.onboardingTitle}>SafeSpaceTalks</Text>
        <View style={styles.clipArtContainer}>
          <Image source={OnboardingImages.images[6]} resizeMode="contain" style={styles.clipArt} />
        </View>

        <View style={styles.messageUnderClipArtContainer}>
          <Text style={styles.messageUnderClipArt}>Welcome to our Mental Health Safespace App, where your privacy is paramount, and all your personal information will be kept strictly confidential to provide you with a secure and supportive environment.</Text>
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

export default OnboardingScreen2

