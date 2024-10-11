
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from './src/screens/WelcomeScreen';
import UserScreens from './src/screens/UserScreens';
import Ionicons from "react-native-vector-icons/Ionicons";
import { FC } from 'react';
import { Icategory } from './src/constant/interface';

//const Drawer = createDrawerNavigator()
const BottomTab = createBottomTabNavigator()

function App() {
  
  

  return (
    
 <NavigationContainer>

      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#620b94" },
          headerTintColor: 'white',
          headerTitleAlign: "center",
          tabBarActiveTintColor:"#620b94"
        }}>
        <BottomTab.Screen
          name='Wellcome'
          component={WelcomeScreen}
          options={{
            tabBarIcon:({color ,size})=>(
              <Ionicons name='home' color={color} size={size}/>
            )
          }} />
        <BottomTab.Screen
          name='User'
          component={UserScreens}
          options={{
            tabBarIcon:({color,size})=>(
              <Ionicons name='person' color={color} size={size}/>
            )
          }}  />
      </BottomTab.Navigator>
    </NavigationContainer>



    // <NavigationContainer>

    //   <Drawer.Navigator
    //     screenOptions={{
    //       headerStyle: { backgroundColor: "#620b94" },
    //       headerTintColor: 'white',
    //       headerTitleAlign: "center",
    //       drawerActiveBackgroundColor: "#d5b9e6",
    //       drawerActiveTintColor: '#620b94',
    //       drawerStyle: { backgroundColor: "#d6d3d3" }

    //     }}>
    //     <Drawer.Screen
    //       name='Wellcome'
    //       component={WelcomeScreen}
    //       options={{
    //         drawerLabel: 'Welcome Screen',
    //         drawerIcon:({color,size})=>(<Ionicons name="home" color={color} size={size}/>)
    //       }} />
    //     <Drawer.Screen
    //       name='User'
    //       component={UserScreens}
    //       options={{
    //         drawerLabel: 'User Screen',
    //         drawerIcon:({color,size})=>(<Ionicons name="person" color={color} size={size}/>)
    //       }}  />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: "center",
    marginHorizontal: 150,
  },
  textStyle: {
    fontSize: 24,
    color: "black",
    fontWeight: 'bold'
  }

})