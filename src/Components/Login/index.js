import React , {useState} from 'react'
import { StyleSheet, Text, View , TextInput , TouchableOpacity} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    email : '' ,
    password : ''
}

const validationSchema = Yup.object().shape({
    username : Yup.string().required('Username harus di isi') ,
    password : Yup.string().required('Password is required')
})

const handlesubmit = (values , actions) => {

}

const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.body}>
                <Text style={{fontSize : 26 , fontWeight : '800' , letterSpacing : 2}}>Login</Text>
                <View style={styles.form}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handlesubmit}
                    >
                    {
                        (props) => {
                            return(
                                <View>
                                    <TextInput style={styles.email} onChangeText={props.handleChange('email')} value={props.values.email} placeholder="Your Email"/>
                                    <Text  >{ props.errors.username}</Text>
                                    <TextInput style={styles.password} onChangeText={props.handleChange('password')} value={props.values.password} placeholder="Your Password" />
                                    <Text  >{ props.errors.username}</Text>
                                    <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Home')}>
                                        <Text style={styles.text}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
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
