import React, { useState, useEffect } from 'react';
import {Text, View, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { GlobalStyles, OnboardingImages} from '../../assets/css/Global'

function OnboardingScreen1({navigation}) {

  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    // Function to update the image index every 1.5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        // Increment the image index, and reset to 1 if it reaches the last image
        return prevImage === Object.keys(OnboardingImages.images).length
          ? 1
          : prevImage + 1;
      });
    }, 1500);

    // Clear the interval when the component unmounts to prevent any potential memory leaks
    return () => clearInterval(interval);
  }, []);




  const nextScreen = () => {
    navigation.navigate('OnboardingScreen2');
  }




  return (

    <View style = {GlobalStyles.onboardingContainer}>

        <Image source={require('../../assets/numesa.png')} style={GlobalStyles.onboardingLogo}/>
        <Text style={GlobalStyles.onboardingTitle}>SafeSpaceTalks</Text>
        
        <View style={GlobalStyles.onboardingImageSlidesContainer}>
        <Image  source={OnboardingImages.images[currentImage.toString()]} resizeMode="contain" style={GlobalStyles.onboardingImageSlides}/>
        </View>
        
        <View style={GlobalStyles.messageContainer}>
          <Text style={GlobalStyles.message}>Talk to Someone, Talk to Proffesional Psychologists and therapist without revealing your identity</Text>
        </View>
      
        <TouchableOpacity style={GlobalStyles.onboardingButton} onPress={nextScreen}>
          <Text style={GlobalStyles.btnTitle}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}



export default OnboardingScreen1;