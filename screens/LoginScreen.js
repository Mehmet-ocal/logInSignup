import React from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/LoginStyles";
import LoginImage from "../components/LoginImage";
import UserIcon from "../components/UserIcon";
import KeyIcon from "../components/KeyIcon";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Giriş işlemleri burada yapılabilir
    navigation.navigate("Main")
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <LinearGradient
    colors={["rgba(229, 178, 202, 1)", "rgba(205, 130, 222, 1)"]}
    style={styles.container}
    >
      <View style={styles.container}>
        <LoginImage />
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Please, Log In</Text>

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
            style={styles.buttonContainer}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity
            onPress={handleRegister}
            style={styles.registerButton}
          >
            <Text style={styles.buttonText}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
