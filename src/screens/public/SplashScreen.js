import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Logo from '../../assets/logo.png'
import styles from '../../theme/Styles'
import { COLORS } from '../../theme/Theme'
const SplashScreen = () => {

    return (
        <View style={[styles.flex1, styles.vhCenter, {backgroundColor: COLORS.white}]}>
            <Image source={Logo} style={[styles.splashimage]} />   
        </View>
    )
}

export default SplashScreen
