import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, ViewPagerAndroidBase } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen1 from '../screens/public/startingScreens/SplashScreen1'
import SplashScreen2 from '../screens/public/startingScreens/SplashScreen2'
import SplashScreen3 from '../screens/public/startingScreens/SplashScreen3'
//Auth Screen
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
//screens
import AboutScreen from '../screens/public/AboutScreen'
import ContactScreen from '../screens/public/ContactScreen'
import HomeScreen from '../screens/public/HomeScreen'
import SettingsScreen from '../screens/public/SettingsScreen'
import ServiceScreen from '../screens/public/ServiceScreen'
import CustomDrawerContent from './CustomDrawerContent'

import { COLORS } from '../theme/Theme'

// stacks
const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator()
////
const HomeStacks = createStackNavigator();
const AboutStack = createStackNavigator();
const ContactStack = createStackNavigator();
const SettingStack = createStackNavigator();
const ServiceStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStacks.Navigator screenOptions={{ headerShown: null }} initialRouteName="Home">
        <HomeStacks.Screen  name="Home" component={ HomeScreen }/>
    </HomeStacks.Navigator>
)
const AboutStackScreen = ({navigation}) => (
    <AboutStack.Navigator screenOptions={{ headerShown: null }} initialRouteName="About">
        <AboutStack.Screen  name="About" component={ AboutScreen }/>
    </AboutStack.Navigator>
)
const ContactStackScreen = ({navigation}) => (
    <ContactStack.Navigator screenOptions={{ headerShown: null }} initialRouteName="Contact">
        <ContactStack.Screen  name="Contact" component={ ContactScreen }/>
    </ContactStack.Navigator>
)
const SettingStackScreen = ({navigation}) => (
    <SettingStack.Navigator screenOptions={{ headerShown: null }} initialRouteName="Settings">
        <SettingStack.Screen  name="Settings" component={ SettingsScreen }/>
    </SettingStack.Navigator>
)
const ServiceStackScreen = ({navigation}) => (
    <ServiceStack.Navigator screenOptions={{ headerShown: null }} initialRouteName="Service">
        <ServiceStack.Screen  name="Service" component={ ServiceScreen }/>
    </ServiceStack.Navigator>
)
const TabsNavigator = ({navigation}) => (
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="About" component={AboutStackScreen} />
        <Tabs.Screen name="Contact" component={ContactStackScreen} />
        <Tabs.Screen name="Setting" component={SettingStackScreen} />
        <Tabs.Screen name="Service" component={ServiceStackScreen} />
    </Tabs.Navigator>
)
const DrawerNavigator = ({ navigation }) => (
    <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
            activeTintColor: COLORS.white,
            activeBackgroundColor: COLORS.primary,
            inactiveTintColor: COLORS.dark,
            inactiveBackgroundColor: COLORS.white
        }}
    >
        <Drawer.Screen name="Home" component={TabsNavigator} options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          )
        }}/>
        <Drawer.Screen name="About" component={AboutScreen} options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          )
        }}/>
        <Drawer.Screen name="Contact" component={ContactScreen} options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="phone" color={color} size={size} />
          )
        }}/>
        <Drawer.Screen name="Login" component={LoginScreen} options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          )
        }}/>
        <Drawer.Screen name="Mail" component={AboutScreen} options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="mail" color={color} size={size} />
          )
        }}/>
    </Drawer.Navigator>
)

const AuthStackNavigator = ({ navigation }) => (
    <AuthStack.Navigator screenOptions={{ headerShown: null }} initialRouteName="Splash1">
        {/* <AuthStack.Screen name="PermissonsPOC" component={PermissonsPOC} /> */}
        {/* <AuthStack.Screen name="Permissions" component={PermissionsScreen} /> */}
        <AuthStack.Screen name="Home" component={DrawerNavigator} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Splash1" component={SplashScreen1} />
        <AuthStack.Screen name="Splash2" component={SplashScreen2} />
        <AuthStack.Screen name="Splash3" component={SplashScreen3} />
        <AuthStack.Screen name="Signup" component={SignupScreen} />
        {/*<AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
    </AuthStack.Navigator>
)
const Routes = () => {
     const [loading, setLoading] = useState(true)
     const [isLoggedIn, setIsLoggedIn] = useState(false)
     const [userToken, setUserToken] = useState('')
     useEffect(() => {
         setTimeout(() => {
             setLoading(true)
         }, 1000)
     }, [])
    return (
        <NavigationContainer>
             {loading ?  <AuthStackNavigator/>  : <DrawerNavigator /> }
        </NavigationContainer>
    )
}

export default Routes