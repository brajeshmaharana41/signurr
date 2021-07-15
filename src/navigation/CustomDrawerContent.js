import React from 'react'
import { View, Text, Linking, Image, TouchableOpacity } from 'react-native'
import { TouchableRipple, Title, Drawer, Switch } from 'react-native-paper';
import { BlurView } from "@react-native-community/blur";
import RadialGradient from 'react-native-radial-gradient';
import Animated from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import styles from '../theme/Styles'
import { COLORS } from '../theme/Theme'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BoldText, RegularText } from '../components/UIComponents/Text'

const CustomDrawerContent = (props) => {
    const { navigation } = props

    const UserView = ({ navigation }) => {
        return (
          <TouchableRipple
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <View style={styles.drawerHeader}>
            <View style={styles.row_space}>
                <Image style={styles.profileImage} source={{ uri:'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',}} />            
                    <Title style={styles.title}>Vishal Pawar</Title>
            </View>
              <View style={styles.textContainer}>
                <View style={styles.row_space}>
                  <Text style={styles.description}>Follow:</Text>
                  <TouchableOpacity onPress={() => Linking.openURL('https://github.com/vishalpwr?tab=repositories')}
                    style={{ height: 28, borderRadius: 30, backgroundColor: Colors.accent, paddingHorizontal: 8, alignItems: 'center', flexDirection: 'row' }}>
                    <Feather name="github" color={COLORS.light} size={18} />
                    <Text style={{ color: Colors.dark }}> vishalpwr</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableRipple>
        )
      }

    const translateX = Animated.interpolateNode(props.progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
      });
      const opacity = Animated.interpolateNode(props.progress, {
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.9, 1]
      })
      return (
        <RadialGradient  style={[styles.flex1]}
          colors={[COLORS.white, 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.4)',]}
          // stops={[0.1, 0.5, 0.75, 1]}
          center={[145, 100]}
          radius={650}>
          <Animated.View style={{ flex: 1, transform: [{ translateX }], backgroundColor: 'transparent' }}>
            <BlurView
              style={styles.blurAbsolute}
              blurType="light"
              blurAmount={20}
              reducedTransparencyFallbackColor="white"//ios only
            />
              <Drawer.Section style={[styles.drawerSection]}> 
              <UserView {...props} />
              </Drawer.Section>
              <DrawerContentScrollView {...props}>
              <Drawer.Section>
                <DrawerItemList {...props}
                    activeTintColor={COLORS.white}
                />
               </Drawer.Section> 
                <Drawer.Section title="ACCOUNT">
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={false} />
                        </View>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.preference}>
                        <Text>RTL</Text>
                        <View pointerEvents="none">
                            <Switch value={false} />
                        </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
                <Drawer.Section title="ACCOUNT">
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.preference1}>
                        <Text>Log Out</Text>
                        <View pointerEvents="none">
                            <Feather name="log-out" color={COLORS.dark} size={20} />
                        </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
            {/* <View style={styles.drawerHeader}>
            <View style={styles.row_space}>
                <Image style={styles.profileImage} source={{ uri:'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',}} />            
                    <Title style={styles.title}>Vishal Pawar</Title>
            </View>
              <View style={styles.textContainer}>
                <View style={styles.row_space}>
                  <Text style={styles.description}>Follow:</Text>
                  <TouchableOpacity onPress={() => Linking.openURL('https://github.com/vishalpwr?tab=repositories')}
                    style={{ height: 28, borderRadius: 30, backgroundColor: Colors.accent, paddingHorizontal: 8, alignItems: 'center', flexDirection: 'row' }}>
                    <Feather name="github" color={COLORS.light} size={18} />
                    <Text style={{ color: Colors.dark }}> vishalpwr</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View> */}
            <TouchableOpacity
                style={[styles.drawerbtn, styles.drawershadow, styles.drawerbutton, styles.drawerbtnPrimary]}
                activeOpacity={0.7}
                onPress={() => submitHandler()}
            >   
                <Image style={styles.profileImage} source={{ uri:'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',}} />            
                <BoldText style={styles.drawerbtnPrimaryText}>Sign up</BoldText>
            </TouchableOpacity>
            </Drawer.Section>
          </Animated.View>
        </RadialGradient>
      )
}

export default CustomDrawerContent

