import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Cover from '../Components/Cover'
import Login from '../Components/Login'
import Home from '../Pages/Main'
import Register from '../Components/Register'
import Screen from '../Components/Screen'
const Stack = createStackNavigator()

const Index = () => {

    return (
        <Stack.Navigator >
            <Stack.Screen name="Screen" component={Screen} options={{headerShown : false}} />
            <Stack.Screen name="cover" component={Cover} options={{headerShown : false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown : false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
        </Stack.Navigator>
    )
}

export default Index


