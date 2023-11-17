// Nav.js in the /components folder

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const Nav = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`w-full bg-white absolute bottom-0`}>
      <View style={tw`w-full h-1 bg-gray-300`} />
      <View style={tw`flex flex-row items-center justify-between h-28 py-2`}>
        <TouchableOpacity 
          style={tw`flex-1 items-center justify-center border-r border-gray-300`} 
          onPress={() => navigation.navigate('Home')}>
          <Text style={tw`text-gray-800 font-semibold`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`flex-1 items-center justify-center border-r border-gray-300`}>
          <Text style={tw`text-gray-800 font-semibold`}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`flex-1 items-center justify-center border-r border-gray-300`}>
          <Text style={tw`text-gray-800 font-semibold`}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`text-gray-800 font-semibold`}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nav;
