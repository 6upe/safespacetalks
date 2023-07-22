import { StyleSheet } from 'react-native';

 export const GlobalStyles = StyleSheet.create({
    onboardingContainer:{
        padding: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      onboardingLogo:{
        width: 150,
        height: 150,
        marginTop: 50
      },
      onboardingTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
      },
      messageContainer: {
        width: '80%',
        textAlign: 'center',
        marginVertical: 20
      },
      message: {
        fontSize: 13,
        textAlign: 'center',
      },
      onboardingButton:{
        padding: 5, 
        backgroundColor: '#43a05f', 
        width: '80%',
        borderRadius: 10,
        marginTop: 10
    
      }, btnTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 5
      }, 
      onboardingImageSlidesContainer:{
        // border: '1px solid black',
        width: '100%',
        height: 200,
        alignItems: 'center',
        marginVertical: 10
      },
      onboardingImageSlides: {
        width: 250,
        height: '100%'
      }
});


export const styles = StyleSheet.create({
  twoBtnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  onboardingButton:{
    padding: 5, 
    backgroundColor: '#43a05f', 
    width: 100,
    borderRadius: 10,
    marginTop: 10

  }, btnTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 5
  }, 
  clipArtContainer: {
    display: 'flex',
    width: '100%',
    height: 200,
    marginBottom: 100,
    alignContent: 'center'
  },
  clipArt: {
    width: 300,
    height: 300,
    marginBottom: 100
  },
  messageUnderClipArtContainer:{
    marginVertical: 20
  },
  messageUnderClipArt: {
    fontSize: 13,
    textAlign: 'center',
  }
});


export const OnboardingImages = {
    images: {
        '2' : require('../onboardingImageSlides/Asset3.png'),
        '1' : require('../onboardingImageSlides/Asset2.png'),
        '3' : require('../onboardingImageSlides/Asset4.png'),
        '4' : require('../onboardingImageSlides/Asset5.png'),
        '5' : require('../onboardingImageSlides/clipart1.jpg'),
        '6' : require('../onboardingImageSlides/clipart2.jpg'),
        '7' : require('../onboardingImageSlides/clipart3.jpg'),
        '8' : require('../onboardingImageSlides/clipart4.jpg'),
        '9' : require('../onboardingImageSlides/clipart5.jpg'),
    }
};
