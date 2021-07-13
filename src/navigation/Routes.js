import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, ViewPagerAndroidBase } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from '../screens/public/SplashScreen'
import SplashScreen1 from '../screens/public/startingScreens/SplashScreen1'
import SplashScreen2 from '../screens/public/startingScreens/SplashScreen2'
import SplashScreen3 from '../screens/public/startingScreens/SplashScreen3'
import LoginScreen from '../screens/auth/LoginScreen'
import { COLORS } from '../theme/Theme'

// stacks
const SplashStack = createStackNavigator()
const HomeStack = createStackNavigator()
const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const SplashStackNavigator = ({ navigation }) => (
    <SplashStack.Navigator screenOptions={{ headerShown: false }} >
        <SplashStack.Screen name="Splash" component={SplashScreen} />
    </SplashStack.Navigator>
)

const AuthStackNavigator = ({ navigation }) => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash1">
        {/* <AuthStack.Screen name="PermissonsPOC" component={PermissonsPOC} /> */}
        {/* <AuthStack.Screen name="Permissions" component={PermissionsScreen} /> */}
        {/* <AuthStack.Screen name="Home" component={HomeScreen} /> */}
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Splash1" component={SplashScreen1} />
        <AuthStack.Screen name="Splash2" component={SplashScreen2} />
        <AuthStack.Screen name="Splash3" component={SplashScreen3} />
        {/* <AuthStack.Screen name="Signup" component={SignupScreen} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
    </AuthStack.Navigator>
)
// const DrawerNavigator = ({ navigation }) => (
//     <Drawer.Navigator 
//         initialRouteName="Home" 
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//         drawerContentOptions={{
//             activeTintColor: COLORS.white,
//             activeBackgroundColor: COLORS.primary,
//             inactiveTintColor: COLORS.dark,
//             inactiveBackgroundColor: COLORS.white
//         }}
//     >
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="About" component={AboutScreen} />
//         <Drawer.Screen name="Videos" component={VideosScreen} />
//         <Drawer.Screen name="Departments" component={DepartmentsScreen} />
//         <Drawer.Screen name="Donations" component={DonationsScreen} />
//         <Drawer.Screen name="News" component={NewsScreen} />
//         <Drawer.Screen name="Contacts" component={ContactsScreen} />
//         <Drawer.Screen name="Shop" component={ShopScreen} />
//         <Drawer.Screen name="Login" component={LoginScreen} />
//         <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//     </Drawer.Navigator>
// )

const Routes = () => {
     const [loading, setLoading] = useState(true)
     const [isLoggedIn, setIsLoggedIn] = useState(false)

     useEffect(() => {
         setTimeout(() => {
             setLoading(false)
         }, 1500)
     }, [])

    return (
        <NavigationContainer>
             {loading ? <SplashStackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}

export default Routes