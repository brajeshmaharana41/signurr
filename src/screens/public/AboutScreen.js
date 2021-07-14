import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../theme/Styles'
import { COLORS } from '../../theme/Theme'
import Header from '../../components/UIComponents/Header'
const AboutScreen = () => {
    return (
        <>
            <Header />
            <View style={[styles.flex1, styles.vhCenter]}>
                <Text>Hi About Screen</Text>
            </View>
        </>
    )
}

export default AboutScreen
