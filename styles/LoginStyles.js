import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  subtitle: {
    fontWeight: "800",
    fontSize: 28,
    color: "#fff",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 342,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 37,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    height: "100%",
    color: "#000",
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    width: 342,
    height: 70,
    backgroundColor: "#78258B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 37,
    marginBottom: 20,
  },
  registerButtonContainer: {
    width: 342,
    height: 70,
    backgroundColor: "#52439A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 37,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: '#ccc',
    borderStyle: 'dashed',

  },
  orText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  registerButton: {
    width: 342,
    height: 70,
    backgroundColor: "#FFFFFF47",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 37,
    marginBottom: 20,
  },
});

export default styles;
