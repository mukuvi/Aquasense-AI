import { AppRegistry } from "react-native";
import App from "../App"; // Make sure this path is correct
import { name as appName } from "./app.json"; // Make sure this file exists and contains the correct name

AppRegistry.registerComponent(appName, () => App);
