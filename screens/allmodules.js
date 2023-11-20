// allmodules.js in the screens folder
import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

const AllModules = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground 
        source={require('../assets/homebg.png')} // path to your background image
        style={styles.backgroundImage}
      >
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', 
    },
    
  });

export default AllModules;
