import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from react-native-vector-icons
import COLORS from "../constants/colors";

const About = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons
        name="information-circle-outline"
        size={100}
        color={COLORS.primary}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
        About
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        IZARA is a secure and private messaging application that allows users to
        connect with each other by chatting, calling, and sharing files
        securely.
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16 }}>Creation Date: January 2023</Text>
        <Text style={{ fontSize: 16 }}>License: MIT Open License</Text>
      </View>
    </View>
  );
};

export default About;
