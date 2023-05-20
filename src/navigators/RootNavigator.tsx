import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { TouchableOpacity } from "react-native";
//icons
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function RootNavigator() {
  const CustomTabBarButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#5C3EBC",
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          marginTop: -10,
          borderWidth: 2,
          borderColor: "#F5FCFF",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
        }}
      >
        <Ionicons name="ios-list" size={32} color="#FFD00C" />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{ tabBarButton: () => <CustomTabBarButton /> }}
      />
      <Tab.Screen
        name="user"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
