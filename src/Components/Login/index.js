import React , {useState} from 'react'
import { StyleSheet, Text, View , TextInput , TouchableOpacity , ToastAndroid ,Alert } from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Firebase from '../../Config/Firebase'
const initialValues = {
    email : '' ,
    password : ''
}

const validationSchema = Yup.object().shape({
    email : Yup.string().required('Email harus di isi').email('invalid email format') ,
    password : Yup.string().required('Password is required')
})



const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.body}>
                <Text style={{fontSize : 26 , fontWeight : '800' , letterSpacing : 2}}>Login</Text>
                <View style={styles.form}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values , actions) => {
                            Firebase.auth().createUserWithEmailAndPassword(values.email , values.password)
                            .then( Credential => {
                                
                            })
                            .catch( err => {
                                var message = err.message
                                ToastAndroid.show(message , 3000)
                            })
                        }}
                    >
                    {
                        (props) => (
                            
                                <View>
                                    <TextInput style={styles.email} 
                                    onChangeText={props.handleChange('email')}
                                    placeholder="Your Email"
                                    onBlur={props.handleBlur('email')}/>
                                    <Text style={{color : 'red' , marginBottom : 10}} >{props.touched.email && props.errors.email}</Text>

                                    <TextInput style={styles.password} 
                                    onChangeText={props.handleChange('password')} 
                                    placeholder="Your Password" 
                                    secureTextEntry={true}
                                    onBlur={props.handleBlur('password')} />

                                    <Text style={{color : 'red' , marginBottom : 10}} >{props.touched.password && props.errors.password}</Text>
                                    <TouchableOpacity style={styles.login} onPress={props.handleSubmit}>
                                        <Text style={styles.text}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        
                    }
                    </Formik>
                </View>
           </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        padding : 20 ,
        flexDirection : 'column' ,
        justifyContent : 'center',
        alignItems : 'center'
        
    } ,

    body : {
        width : '100%'
    } ,

    email : {
        padding : 6 ,
        fontSize : 14 ,
        borderWidth : 1 ,
        borderRadius : 10 ,
        marginTop : 20 ,
        marginBottom : 5
        
    } ,

    password : {
        padding : 6 ,
        fontSize : 14 ,
        borderWidth : 1 ,
        borderRadius : 10 ,
        marginBottom : 15
    } ,

    login : {
        padding : 13 ,
        backgroundColor : '#2E42AA',
        display : 'flex' ,
        flexDirection : 'row' ,
        justifyContent : 'center' ,
        borderRadius : 10

    } ,

    text : {
        color : 'white' ,
        
    }
})
