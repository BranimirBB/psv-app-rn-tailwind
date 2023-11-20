// screens/home.js

// HomeScreen.js in the /screens folder
import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import ArticleCard from '../components/articlecard'; // Adjust the path according to your project structure

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground 
        source={require('../assets/homebg.png')} // Adjust the path to your background image
        style={styles.backgroundImage}
      >
        <ArticleCard /> 
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  // ... any other styles you want to add for the HomeScreen ...
});

export default HomeScreen;
