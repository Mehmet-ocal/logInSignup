import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/LoginStyles";
import RegisterImage from "../components/RegisterImage";
import UserIcon from "../components/UserIcon";
import KeyIcon from "../components/KeyIcon";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Giriş işlemleri burada yapılabilir
    navigation.navigate("Login");
  };

  return (
    <LinearGradient
      colors={["#9183DE", "#A094E3"]}
      style={styles.container}
    >
      <View style={styles.container}>
        <RegisterImage />
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Hi there!</Text>
          <Text style={styles.subtitle}>Let's Get Started</Text>

          <View style={styles.inputContainer}>
            <UserIcon style={styles.userIcon} />
            <TextInput style={styles.input} placeholder="Username" />
          </View>
          <View style={styles.inputContainer}>
            <KeyIcon />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={styles.registerButtonContainer}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Create an Account</Text>
          </TouchableOpacity>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            style={styles.registerButton}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default RegisterScreen;
