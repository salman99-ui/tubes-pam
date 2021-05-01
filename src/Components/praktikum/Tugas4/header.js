import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const header = () => {
    return (
        <View>
           <Text style={styles.text}>Praktikum PAM</Text> 
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    text : {
        fontSize : 24 ,
        color : 'white'
    }
})
