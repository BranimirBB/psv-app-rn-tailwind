// ArticleCard2.js in the /components folder
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ArticleCard2 = () => {
  return (
    <TouchableOpacity style={styles.articleContainer} activeOpacity={0.9}>
      <Image
          source={require('../assets/arpsv.png')} // vr picture
          style={styles.articleImage}
        />
        <View style={styles.articleContent}>
          <Text style={styles.articleDate}>VR project members</Text>
          <Text style={styles.articleTitle}>
            Augmented reality experince for the PSV fans!
          </Text>
          <Text style={styles.articleDescription} numberOfLines={3}>
          Do you want to see a real-size Luuk De Jong next to you? Do you want to see his performance? 
          With Augmented Reality (AR), PSV fans can enjoy a new level of interactive fun. Point your phone at a PSV ticket or jersey, and watch as it comes alive with player stats, game highlights, or even a 3D mascot.
          </Text>
  
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Test it now!</Text>
          </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    articleContainer: {
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "#fff",
        marginTop: 20, 
        margin: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3, // Only for Android
      },
      articleImage: {
        height: 224, // Tailwind h-56
        width: "100%",
        resizeMode: "cover",
      },
      articleContent: {
        padding: 16, // Tailwind p-4 sm:p-6
      },
      articleDate: {
        color: "#6b7280", // Tailwind text-gray-500
        fontSize: 10, // Tailwind text-xs
        marginBottom: 4,
      },
      articleTitle: {
        color: "#111827", // Tailwind text-gray-900
        fontSize: 18, // Tailwind text-lg
        fontWeight: "bold",
        marginTop: 2,
      },
      articleDescription: {
        color: "#6b7280", // Tailwind text-gray-500
        fontSize: 14, // Tailwind text-sm/relaxed
        marginTop: 8,
      },
      button: {
        marginTop: 12,
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 20,
        alignSelf: 'center', // Center button horizontally
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      },
});

export default ArticleCard2;
