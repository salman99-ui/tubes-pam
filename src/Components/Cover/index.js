import React from 'react'
import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'
import taonga from '../../assets/img/taonga.png'
const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cover}>
                <Image source={taonga} style={styles.img} />
            </View>

            <View style={styles.navigate}>
                <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textlogin}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textregister}>Register</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        alignItems : 'center' ,
        justifyContent : 'center' ,
        padding : 30                              
    } ,
    cover : {
        height : 200 ,
        marginBottom : 20
    } ,
    navigate : {
        width : '100%'
    } ,

    login : {
        padding : 15 ,
        width : '100%' ,
        backgroundColor : '#2E42AA' ,
        marginBottom : 25 ,
        textAlign : 'center' ,
        borderRadius : 10
    } ,

    register : {
        padding : 15 ,
        borderWidth : 1 ,
        borderColor : '#2E42AA' ,
        width : '100%' ,
        borderRadius : 10

    } ,
   

    textlogin : {
        color : 'white' ,
        textAlign : 'center' ,
        fontSize : 13
    } ,

    textregister : {
        color : '#2E42AA' ,
        textAlign : 'center' ,
        fontSize : 13
        
    }

})
