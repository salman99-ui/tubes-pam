import React from 'react'
import { StyleSheet, Text, View , TextInput , CheckBox , TouchableOpacity} from 'react-native'

const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.register}>Register</Text>
                    <View style={styles.gap}>
                        <TextInput placeholder="Name" style={styles.input}/>
                    </View>

                    <View style={styles.gap}>
                        <TextInput placeholder="Email" style={styles.input}/>
                    </View>

                    <View style={styles.gap}>
                        <TextInput placeholder="Password" style={styles.input}/>
                    </View>

                    <View style={styles.gap}>
                        <TextInput placeholder="Address" style={styles.input}/>
                    </View>

                    <View style={styles.gap}>
                        <TextInput placeholder="Phone" style={styles.input}/>
                    </View>

                    <View style={[styles.gap , styles.terms]}>
                        <CheckBox  /> 
                        <Text>I accept <Text style={{color : 'blue'}}>Terms of Use</Text></Text>
                    </View>

                    <View style={styles.gap}>
                    <TouchableOpacity style={styles.submit}>
                        <Text style={styles.text}>Register Now</Text>
                    </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection : 'column' ,
        padding : 20 ,
        justifyContent : 'center' ,
        alignItems : 'center'
    } ,

    body : {
        width : '100%'
    } , 

    gap : {
        marginBottom : 15 ,
        width : '100%' ,
    } ,

    register : {
        marginBottom : 30 ,
        fontSize : 26 ,
        fontWeight : '700' ,
        textAlign : 'center'
    } , 

    input : {
        width : '100%' , 
        padding : 6 , 
        borderWidth : 1 ,
        borderRadius : 10 ,
        fontSize : 12
    } ,

    terms : {
        flexDirection : 'row' ,
        alignItems : 'center'
    } ,
    submit : {
        padding : 14 ,
        backgroundColor : '#2E42AA' ,
        flexDirection : 'row' ,
        justifyContent : 'center' ,
        borderRadius : 10
    } ,

    text : {
        color : 'white' ,
        fontSize : 14
    }
})
