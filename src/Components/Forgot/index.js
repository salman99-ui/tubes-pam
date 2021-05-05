import React from 'react'
import { StyleSheet, Text, View , Alert , TextInput , ToastAndroid , TouchableOpacity} from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import Firebase from '../../Config/Firebase'
const validationSchema = Yup.object().shape({
    email : Yup.string().email('please enter a valid email')
})

const Index = ({navigation}) => {
   
    return (
        <View style={styles.container}>
            <Formik
            initialValues={{email : ''}}
            validationSchema={validationSchema}
            onSubmit={(values , actions ) => {

                Firebase.auth().sendPasswordResetEmail(values.email).then( result => {
                    Alert.alert("Success" , "Please Open Your Email" ,
                    [{text : "OK" , onPress : () => navigation.navigate('Login')}])
                })
            }}
            >
            {
                props => (
                    <View style={styles.body}>
                        <Text style={styles.text}>Input Your Email</Text>

                        <TextInput 
                        style={styles.input}
                        placeholder="Your Email" 
                        onChangeText={props.handleChange('email')}
                        onBlur={props.handleBlur('email')}
                        />

                        <Text style={{color : 'red' , marginBottom : props.errors.email ? 10 : 0}} >{props.touched.email && props.errors.email}</Text>
                        <TouchableOpacity style={styles.submit} onPress={props.handleSubmit}>
                            <Text style={styles.send}>Send</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            </Formik>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection : 'row' ,
        justifyContent : 'center' ,
        
    } ,

    body : {
        marginTop : 100 , 
        width : '80%' ,
        height : 200
    } ,

    text : {
        fontSize : 16 ,
        fontWeight : '500'
    } ,

    input : {
        marginTop : 12 ,
        marginBottom : 8 ,
        borderWidth : 1 ,
        padding : 5 ,
     
    } ,

    submit : {
        backgroundColor : 'blue' ,
        padding : 10
    } ,
    send : {
        color : 'white' ,
        textAlign : 'center'
    }
})
