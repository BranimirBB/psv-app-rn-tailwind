// Nav.js in the /components folder

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const Nav = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`w-full bg-white absolute bottom-0`}>
      <View style={tw`w-full h-1 bg-gray-300`} />
      <View style={tw`flex flex-row items-center justify-between h-28 py-2`}>
        <TouchableOpacity
          style={tw`flex-1 items-center justify-center border-r border-gray-300`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={tw`text-gray-800 font-semibold text-lg`}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-1 items-center justify-center border-r border-gray-300`}
          onPress={() => navigation.navigate("AllModules")}
        >
          <Text style={tw`text-gray-800 font-semibold text-lg`}>
            <Text style={tw`text-center`}>All</Text>
            {"\n"}
            <Text style={[tw`text-gray-800 font-semibold`,{ lineHeight: 23, marginTop: -3 },]}>Modules</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-1 items-center justify-center border-r border-gray-300`}
          onPress={() => navigation.navigate("Feedback")}
        >
          <Text style={tw`text-gray-800 font-semibold text-lg`}>Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-1 items-center justify-center`}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={tw`text-gray-800 font-semibold text-lg`}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nav;
