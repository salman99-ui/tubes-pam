import React from 'react'
import {Button , StyleSheet, Text, View , Image ,TouchableOpacity} from 'react-native'

const body = () => {
    return (
        <View>
            <Image style={styles.img} source={require('../../../assets/img/golang.png')} />
            <Text>-- Parent Component</Text>
            <TouchableOpacity style={styles.button}>Like 0</TouchableOpacity>
            <Text>-- Child Component </Text>
            <Text style={styles.text}>Hello Mahasiswa</Text>
            <TouchableOpacity style={styles.button}>Like</TouchableOpacity>
        </View>
    )
}

export default body

const styles = StyleSheet.create({
    img : {
        width : 100 ,
        height : 100 ,
        marginBottom : 20
    } ,
    button : {
        padding : 10 ,
        backgroundColor : '#d6f2ff' ,
        width : 100 ,
        textAlign : 'center' ,
        marginVertical : 10 
    } ,
    text : {
        marginVertical : 10 
    }
})
