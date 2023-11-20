// screens/home.js

import React from 'react';
import { ImageBackground, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import ArticleCard from '../components/articlecard'; // Article card 1
import ArticleCard2 from '../components/articlecard2';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={styles.scrollViewStyle}>
      <ImageBackground 
        source={require('../assets/homebg.png')} // path to your background image
        style={styles.backgroundImage}
      >
        <ArticleCard /> 
        <ArticleCard2 /> 
      </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  flexContainer: {
    flex: 1, // This will ensure the container takes up all available space
  },
  scrollViewStyle: {
    // If you have specific styles for your ScrollView, they would go here
  },
  
});

export default HomeScreen;
