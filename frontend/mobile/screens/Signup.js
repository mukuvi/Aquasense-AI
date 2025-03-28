import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import axios from "axios";
import { SERVER_IP } from "./constants";
const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [genre, setGenre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isGenreFocused, setIsGenreFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleSignup = async () => {
    if (!isChecked) {
      Alert.alert("Error", "Please accept the terms and policies.");
      return;
    }

    setIsLoading(true); // Enable the loading indicator

    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all the fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${SERVER_IP}/api/users/`, {
        nom: username,
        email,
        password,
        genre,
      });
      Alert.alert("Success", "Registration successful!");
      navigation.navigate("HomeScreen");
    } catch (error) {
      Alert.alert(
        "Error",
        "Registration failed. Please check your information."
      );
    }

    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create your account! 👋</Text>
        <Text style={styles.subtitle}>Connect to the world!</Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="person"
            size={24}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Name"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={[styles.input, isUsernameFocused && styles.inputFocused]}
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={() => setIsUsernameFocused(false)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail"
            size={24}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder=" Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="md-transgender"
            size={24}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Username"
            value={genre}
            onChangeText={(text) => setGenre(text)}
            style={[styles.input, isGenreFocused && styles.inputFocused]}
            onFocus={() => setIsGenreFocused(true)}
            onBlur={() => setIsGenreFocused(false)}
          />
        </View>
        <View style={[styles.inputContainer, styles.passwordInput]}>
          <Ionicons
            name="lock-closed"
            size={24}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!isPasswordShown}
            style={[styles.passwordTextInput]}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
          >
            <Ionicons
              name={isPasswordShown ? "eye-off" : "eye"}
              size={24}
              color="black"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            color="#007bff"
            style={styles.checkbox}
          />
          <Text>I accept the terms and policies</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity
            onPress={isChecked ? handleSignup : null}
            style={[styles.button, !isChecked && styles.disabledButton]}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        )}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>I already have an account</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={[
                styles.signupText,
                { color: "#0072ff", marginLeft: 5, fontWeight: "700" },
              ]}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#0072af",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  input: {
    flex: 1,
  },
  inputIcon: {
    marginRight: 10,
    color: "#597081",
  },
  inputFocused: {
    borderColor: "blue",
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordTextInput: {
    flex: 1,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkbox: {
    marginRight: 8,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  signupText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0072ff",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 5,
  },
  disabledButton: {
    backgroundColor: "#ccc",
    opacity: 0.5,
  },
});

export default Signup;
