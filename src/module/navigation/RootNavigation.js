import { createAppContainer, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    }
  },
  {
    defaultNavigationOptions: () => ({
      header: null
    })
  }
);

export default createAppContainer(stackNavigator);
