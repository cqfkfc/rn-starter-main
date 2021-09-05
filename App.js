import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ChangeColorScreen from "./src/screens/ChangeColorScreen";
import ChangeColorReducerScreen from "./src/screens/ChangeColorScreenReducer";
import ColorScreen from "./src/screens/ColorScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CounterScreenReducer from "./src/screens/CounterScreenReducer";
import EnterNameScreen from "./src/screens/EnterNameScreen";
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
    CounterScreenReducer: CounterScreenReducer,
    ColorScreen: ColorScreen,
    ChangeColorScreen: ChangeColorScreen,
    ChangeColorReducerScreen: ChangeColorReducerScreen,
    EnterNameScreen: EnterNameScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home",
    },
  }
);

export default createAppContainer(navigator);
