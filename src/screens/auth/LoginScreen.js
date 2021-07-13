import React, { useState } from 'react'
import { View, TextInput, Image, TouchableOpacity, Modal } from 'react-native'
import Logo from '../../assets/login.gif'
import styles from '../../theme/Styles'
import { COLORS, SIZES } from '../../theme/Theme'
import { RegularText, BoldText } from '../../components/UIComponents/Text'

const LoginScreen = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signup, setSignup] = useState('')

    const submitHandler = () => {
        alert("Successfully signed in!!")
        console.log(email, password)
        props.navigation.navigate("Home")
    }

    return (
        <View style={[styles.flex1, styles.bgWhite,]}>
            <View style={[styles.flex1, styles.vhCenter]}>
                <Image source={Logo} style={styles.loginLogo} />
                <View style={[ styles.flex1, styles.loginbackgroung, styles.loginWrapper]}>
                <BoldText style={[styles.bold, styles.loginHeading,]}>Login to your Account</BoldText>
                <TextInput
                    label="Username"
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor={COLORS.light}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={COLORS.light}
                    secureTextEntry={true}
                />
                <View style={styles.fpWrap}>
                    <TouchableOpacity 
                        onPress={() => props.navigation.navigate('ForgotPassword')} 
                        style={styles.link}
                        activeOpacity={0.7}
                    >
                        <BoldText style={[styles.linkText, styles.smallText]}>Forgot Password</BoldText>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.btn, styles.shadow, styles.btnLogin, styles.btnloginPrimary]}
                    activeOpacity={0.7}
                    onPress={() => submitHandler()}
                >
                    <BoldText style={styles.btnPrimaryText}>Login</BoldText>
                </TouchableOpacity>
                    <View style={[styles.row, styles.mtLg, styles.vhCenter]}>
                        <RegularText style={styles.lightText}>Don't have an account? </RegularText>
                        <TouchableOpacity 
                            style={styles.link}
                            //onPress={() => props.navigation.navigate('Signup')}
                            activeOpacity={0.7}
                        >
                            <BoldText style={styles.linkText}>{signup}</BoldText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen
