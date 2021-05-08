import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack' 
import Profile from '../Profiles'
import UpdateProfile from '../Profile'
const Index = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown : false}} />
            <Stack.Screen name="ProfileUpdate" component={UpdateProfile} options={{headerShown : false}} />
        </Stack.Navigator>
    )
}

export default Index

const styles = StyleSheet.create({})
