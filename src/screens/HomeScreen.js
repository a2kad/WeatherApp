import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text } from 'react-native';

function HomeScreen() {
    return (
        <View className='flex-1 justify-center items-center'>
        <StatusBar style='dark' />
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen;