import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Main from '../../Components/Main'
import {Dinning} from '../../Components/Products'
const Stack = createStackNavigator()

const Index = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Main} options={{headerShown : false}} />
            <Stack.Screen name="Dinning" component={Dinning} options={{headerShown : false }} />
            <Stack.Screen name="Bedroom" component={Dinning} options={{headerShown : false }} />
            <Stack.Screen name="Living" component={Dinning} options={{headerShown : false }} />
            {/*<Stack.Screen name="Detail" component={} options={{headerShown : false }} /> */}
        </Stack.Navigator>
    )
}
export default Index

const styles = StyleSheet.create({})
