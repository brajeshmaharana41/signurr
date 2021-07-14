import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../theme/Styles'
import { COLORS } from '../../theme/Theme'
import Header from '../../components/UIComponents/Header'

const HomeScreen = () => {
    return (
        <>
            <Header />
            <View style={[styles.flex1, styles.vhCenter]}>
                <Text>Hi Home Screen </Text>
            </View>
        </>
    )
}

export default HomeScreen
