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
//Auth Screen
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
//screens
import AboutScreen from '../screens/public/AboutScreen'
import ContactScreen from '../screens/public/ContactScreen'
import HomeScreen from '../screens/public/HomeScreen'
import SettingsScreen from '../screens/public/SettingsScreen'
import { COLORS } from '../theme/Theme'
//import { Tab } from 'react-native-elements/dist/tab/Tab'

// stacks
const SplashStack = createStackNavigator()
const HomeStack = createStackNavigator()
const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const TabsNavigator = ({navigation}) => (
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="About" component={AboutScreen} />
        <Tabs.Screen name="Contact" component={ContactScreen} />
        <Tabs.Screen name="Setting" component={SettingsScreen} />
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
        <Drawer.Screen name="Home" component={TabsNavigator} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
)
const SplashStackNavigator = ({ navigation }) => (
    <SplashStack.Navigator screenOptions={{ headerShown: false }} >
        <SplashStack.Screen name="Splash" component={SplashScreen} />
    </SplashStack.Navigator>
)

const AuthStackNavigator = ({ navigation }) => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash1">
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
const HomeStackNavigator = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: COLORS.primary
            },
            headerTitle: props => (
                <Image
                    style={{ left: -30, height: 50 }}
                    source={require('../assets/logo.png')}
                    resizeMode='contain'
                />
            ),
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                >
                    <Ionicon name="menu" size={25} color={COLORS.white} />
                </TouchableOpacity>
            ),
            headerLeftContainerStyle: {
                paddingLeft: 15
            }
        }}
        initialRouteName="Home"
    >
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="About" component={AboutScreen} />
        <HomeStack.Screen name="Videos" component={VideosScreen} />
        <HomeStack.Screen name="Departments" component={DepartmentsScreen} />
        <HomeStack.Screen name="Donations" component={DonationsScreen} />
        <HomeStack.Screen name="News" component={NewsScreen} />
        <HomeStack.Screen name="Contacts" component={ContactsScreen} />
        <HomeStack.Screen name="Shop" component={ShopScreen} />
        <HomeStack.Screen name="Login" component={LoginScreen} />
    </HomeStack.Navigator>
)

function CustomDrawerContent(props) {
    const { navigation } = props
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
                <DrawerItemList {...props} />
                {/* <Text style={{color: theme.colors.text}}>User</Text> */}
            </View>
            {/* <Button backgroundColor={theme.colors.background} style={{ backgroundColor: theme.colors.background }}
                title="Toggle App Theme" onPress={() => toggleTheme()}
            // onPress={() => { navigation.navigate('Products') }}
            /> */}
            {/* <TouchableOpacity onPress={() => toggleTheme(navigation)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                    <Text style={{ color: theme.colors.text }}>{isDarkTheme ? 'Light' : 'Dark'} Theme</Text>
                    <View pointerEvents="none">
                        <Switch
                            trackColor={{ false: "#767577", true: "#721602" }}
                            thumbColor={isDarkTheme ? theme.colors.primary : "#f4f3f4"}
                            ios_backgroundColor={isDarkTheme ? theme.colors.primary : "#3e3e3e"}
                            value={isDarkTheme}
                        />
                    </View>
                </View>
            </TouchableOpacity> */}
        </DrawerContentScrollView>
    )
}


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
             {loading ? <SplashStackNavigator /> : <AuthStackNavigator /> }
        </NavigationContainer>
    )
}

export default Routes