import React from 'react'
import { StyleSheet, Text, View , TextInput , CheckBox , TouchableOpacity , ToastAndroid , Alert} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Firebase from 'firebase'
const Index = ({navigation}) => {
    const validationschema = Yup.object().shape({
        email : Yup.string().required('Email harus di isi').email('invalid email format') ,
        password : Yup.string().required('Password is required')
    })

    const handlesubmit = (values , actions) => {
        let data = JSON.stringify(values)
        Firebase.auth().createUserWithEmailAndPassword(values.email , values.password).then( data => {
            Alert.alert(
                "Success",
                "",
                [
                  { text: "OK", onPress: () => navigation.replace('Login') }
                ]
              );
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.register}>Register</Text>
                   <Formik
                   initialValues={{email : '' , password : ''}}
                   validationSchema={validationschema}
                   onSubmit={handlesubmit}
                   >
                    {
                        (props) => (
                            <View>
                                <View style={styles.gap}>
                                    <TextInput placeholder="Email" style={styles.input}
                                    onChangeText={props.handleChange('email')}
                                    onBlur={props.handleBlur('email')}
                                    />
                                    <Text style={{color : 'red' , marginTop : 5}} >{props.touched.email && props.errors.email}</Text>
                                </View>

                                <View style={styles.gap}>
                                    <TextInput placeholder="Password" style={styles.input}
                                    secureTextEntry={true}
                                    onChangeText={props.handleChange('password')}
                                    onBlur={props.handleBlur('password')}
                                    />
                                    <Text style={{color : 'red' , marginTop : 5}} >{props.touched.password && props.errors.password}</Text>
                                </View>

                                <View style={[styles.gap , styles.terms]}>
                                <CheckBox  /> 
                                    <Text>I accept <Text style={{color : 'blue'}}>Terms of Use</Text></Text>
                                </View>

                                <View style={styles.gap}>
                                <TouchableOpacity style={styles.submit} onPress={props.handleSubmit}>
                                    <Text style={styles.text}>Register Now</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }
                    </Formik>
                   

                    

                  
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
