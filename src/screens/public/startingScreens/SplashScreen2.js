import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Logo from '../../../assets/second.png'
import styles from '../../../theme/Styles'
import { COLORS } from '../../../theme/Theme'
import { RegularText, BoldText } from '../../../components/UIComponents/Text'

const SplashScreen2 = (props) => {
    return (
        <View style={[styles.flex1, styles.vhCenter, {backgroundColor: COLORS.white}]}>
            <BoldText style={[styles.titel]}>Globel Timeing</BoldText>
            <RegularText style={[styles.dec]}> Cheack the average Visit deuration, and the total</RegularText>
            <RegularText style={[styles.dec]}>number of web resource visitors</RegularText>
            <Image source={Logo} style={[styles.splashimage]} />
            <TouchableOpacity
                    style={[styles.btn, styles.shadow, styles.btnLogin, styles.btnPrimary]}
                    activeOpacity={0.7}
                    onPress={() => props.navigation.navigate('Splash3')}
                    //onPress={() => submitHandler()}
                >
                <BoldText style={styles.btnPrimaryText}>Next</BoldText>
            </TouchableOpacity>
        </View>
    )
}

export default SplashScreen2
