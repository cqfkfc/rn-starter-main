import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FirstScreen from "./src/screens/FirstScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    FirstScreen: FirstScreen,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
