import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "../home/HomeContainer";
import Exercise from "../exercise/ExerciseContainer";
import Food from "../food/FoodContainer";
import Community from "../community/CommunityContainer";

export default createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    Exercise: {
      screen: Exercise
    },
    Food: {
      screen: Food
    },
    Community: {
      screen: Community
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;

        switch (routeName) {
          case "Home":
            iconSource = require("../../assets/tab-home.png");
            break;
          case "Exercise":
            iconSource = require("../../assets/tab-exercise.png");
            break;
          case "Food":
            iconSource = require("../../assets/tab-food.png");
            break;
          case "Community":
            iconSource = require("../../assets/tab-community.png");
            break;
        }

        return (
          <View style={styles.Container}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.Icon, focused && styles.IconFocused]}
            />
          </View>
        );
      }
    }),
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false
    }
  }
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  Icon: {
    width: 27
  },
  IconFocused: {},
  headerContainer: {
    backgroundColor: "#9a75ff"
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  }
});
