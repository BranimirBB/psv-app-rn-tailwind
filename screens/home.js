// screens/home.js

import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import ArticleCard from '../components/articlecard'; // Article card 1
import ArticleCard2 from '../components/articlecard2'; // Article card 2
import ArticleCard3 from '../components/articlecard3'; // Article card 3
import ArticleCard4 from '../components/articlecard4'; // Article card 4
import ArticleCard5 from '../components/articlecard5'; // Article card 5



const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <ImageBackground source={require('../assets/homebg.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <ArticleCard />
          <ArticleCard2 />
          <ArticleCard3 />
          <ArticleCard4 />
          <ArticleCard5 />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This will ensure the background image covers the whole area
  },
  contentContainer: {
    paddingTop: 30, // Adds 30px of padding only to the top of the content inside the background image
    paddingBottom: 40,
  },
  // ... other styles
});

export default HomeScreen;