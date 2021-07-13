import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Logo from '../../../assets/fourth.png'
import styles from '../../../theme/Styles'
import { COLORS } from '../../../theme/Theme'
import { RegularText, BoldText } from '../../../components/UIComponents/Text'

const SplashScreen3 = (props) => {
    return (
        <View style={[styles.flex1, styles.vhCenter, {backgroundColor: COLORS.white}]}>
            <BoldText style={[styles.titel]}>Globel Winner</BoldText>
            <RegularText style={[styles.dec]}> Cheack the average Visit deuration, and the total</RegularText>
            <RegularText style={[styles.dec]}>number of web resource visitors</RegularText>
            <Image source={Logo} style={[styles.splashimage]}/>
            <TouchableOpacity
                    style={[styles.btn, styles.shadow, styles.btnLogin, styles.splashsignin]}
                    activeOpacity={0.7}
                    onPress={() => props.navigation.navigate('Login')}
                    //onPress={() => submitHandler()}
                >
                <BoldText style={styles.btnPrimaryText}>Sign In</BoldText>
            </TouchableOpacity>
            <TouchableOpacity
                    style={[styles.btn, styles.shadow, styles.btnLogin, styles.splashsignup]}
                    activeOpacity={0.7}
                    //onPress={() => props.navigation.navigate('Login')}
                    //onPress={() => submitHandler()}
                >
                <BoldText style={styles.linkText}>Sign Up</BoldText>
            </TouchableOpacity>
        </View>
    )
}

export default SplashScreen3
