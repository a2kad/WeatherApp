import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

export default function WellcomeScreen() {
    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=> navigation.navigate('Home'),);
    },[])

    return (
        <View  className='flex-1 justify-center items-center'>
        <StatusBar style='dark' />
            <Text>WellcomeScreen</Text>
        </View>
    )
}