import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ChangeColorScreen from "./src/screens/ChangeColorScreen";
import ColorScreen from "./src/screens/ColorScreen";
import CounterScreen from "./src/screens/CounterScreen";
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
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    ChangeColorScreen: ChangeColorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
