import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../theme/Styles'
import { COLORS } from '../../theme/Theme'
import Header from '../../components/UIComponents/Header'
const SettingsScreen = (props) => {
    const { navigation } = props

    return (
        <>
            <Header navigation={navigation}/>
            <View style={[styles.flex1, styles.vhCenter]}>
                <Text>HI Settings Screen </Text>
            </View>
        </>
    )
}

export default SettingsScreen
