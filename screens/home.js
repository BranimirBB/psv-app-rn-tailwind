// screens/home.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: "https://trafficnews.bg/news/2021/10/10/bobi-mihailov-postaviam-si-otlichna-168.jpg" }}
            style={StyleSheet.absoluteFill}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Grow your audience</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
            atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
            veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started Today</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  contentWrapper: {
    flexDirection: 'column',
    gap: 16,
    // For lg and up screens, you may want to change the flexDirection to 'row' and adjust accordingly
  },
  imageWrapper: {
    height: 250, // Adjust height as needed
    overflow: 'hidden',
    borderRadius: 8,
  },
  textWrapper: {
    // Adjust padding as needed for different screen sizes
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    // Tailwind CSS equivalent: text-3xl
  },
  description: {
    marginTop: 16,
    color: '#4a5568', // This is the Tailwind CSS text-gray-600 color
    // Add additional styling as needed
  },
  button: {
    marginTop: 16,
    backgroundColor: '#4c51bf', // This is the Tailwind CSS bg-indigo-600 color
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    // Add shadow and other styles as needed
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default HomeScreen;
