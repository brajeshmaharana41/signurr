import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Logo from '../../assets/signup3.gif'
import { BoldText, RegularText } from '../../components/UIComponents/Text'
import styles from '../../theme/Styles'
import { TextInput } from 'react-native-paper';
import { COLORS, SIZES } from '../../theme/Theme'

const SignupScreen = (props) => {
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [password, setPassword] = useState('')
    const [viewPassword, setViewPassword] = useState(true)
    const submitHandler = () => {
        alert("Successfully submitted!!")
    }
    const viewPasswordHandler = () => {
        setViewPassword(!viewPassword)
    }
    return (
        <View style={[styles.flex1, styles.bgWhite, styles.loginWrapper]}>
            <View style={{ position: 'absolute', top: 15, left: 30 }}>
                <TouchableOpacity 
                    onPress={() => props.navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <Ionicon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={SIZES.lg - 5} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <View style={[styles.flex1, styles.vhCenter]}>
                <Image source={Logo} style={styles.signupLogo} />
                <View style={[styles.signupbackgroung, styles.signupWrapper]}>
                    <BoldText style={[styles.bold, styles.signupHeading]}>Create your Account</BoldText>
                    <TextInput
                        mode="outlined"
                        style={[styles.input]}
                        onChangeText={text => setFirstName(text)}
                        value={firstName}
                        placeholder="First Name*"
                        placeholderTextColor={COLORS.light}
                        keyboardType="name-phone-pad"
                        maxLength={50}
                    />
                    <TextInput
                        mode="outlined"
                        style={[styles.input]}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder="Email*"
                        placeholderTextColor={COLORS.light}
                        keyboardType="email-address"
                        maxLength={50}
                    />
                    <TextInput
                        mode="outlined"
                        style={[styles.input]}
                        onChangeText={text => setContactNumber(text)}
                        value={contactNumber}
                        placeholder="Contact Number*"
                        placeholderTextColor={COLORS.light}
                        keyboardType="number-pad"
                        maxLength={10}
                    />
                    <View style={[styles.inputView]}>
                        <TextInput
                            mode="outlined"
                            style={[styles.input]}
                            onChangeText={text => setPassword(text)}
                            value={password}
                            placeholder="Password*"
                            placeholderTextColor={COLORS.light}
                            secureTextEntry={viewPassword}
                            minLength={6}
                            maxLength={50}
                        />
                        <TouchableOpacity style={styles.inputViewBtn} onPress={() => viewPasswordHandler()}>
                            <Ionicon name={viewPassword ? 'md-eye-off-sharp' : 'md-eye-sharp'} size={25} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={[styles.btn, styles.shadow, styles.btnLogin, styles.signupbtnPrimary]}
                        activeOpacity={0.7}
                        onPress={() => submitHandler()}
                    >
                        <BoldText style={styles.btnPrimaryText}>Sign up</BoldText>
                    </TouchableOpacity>
                    <View style={[styles.row, styles.mtSm, styles.vhCenter]}>
                        <RegularText style={styles.lightText}>Already have an account? </RegularText>
                        <TouchableOpacity
                            style={styles.link}
                            onPress={() => props.navigation.navigate('Login')}
                            activeOpacity={0.7}
                        >
                            <BoldText style={styles.linkText}>Login</BoldText>
                        </TouchableOpacity>
                    </View>
                </View>    
            </View>
        </View>
    )
}

export default SignupScreen
