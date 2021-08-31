import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentOne from "./src/screens/ComponentOne";
import HomeScreen from "./src/screens/HomeScreen";
import ListComponent from "./src/screens/ListComponent";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentOne: ComponentOne,
    ListComponent: ListComponent,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
