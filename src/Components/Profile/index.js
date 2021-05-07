import React from 'react'
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity , Alert } from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Firebase from '../../Config/Firebase'
const Profile =({navigation})=> {
  const validationSchema = Yup.object().shape({
    email : Yup.string().required('Email harus di isi').email('invalid email format') ,
    name : Yup.string().required('Password is required') ,
    phone : Yup.string().required('Phone is required')
})
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.profile}>Profile</Text>
          <Image source={require('../../assets/icon/profil.png')} style={styles.pp}/>
            
              <Formik
              initialValues={{name : '', email : '' , phone : '' }}
              validationSchema={validationSchema}
              onSubmit={(values , actions) => {
                 
               const update = Firebase.auth().currentUser
               update.updateProfile({
                 displayName : values.name ,
                 email : values.email ,
                 phone : values.phone
               })
               .then( result => {
                  let data = result 
                  data = JSON.stringify(result)
                  Alert.alert("Success" , data , [{text : "OK" , onPress : navigation.goBack()}])
               })
               .catch(err => {
                  Alert.alert("Error" , "Wrong Input" , [
                    {text : "Try Again"}
                  ])
               })
              }}
              >
                {
                  (props) => (
                    <View style={styles.box}>
                    <View style={styles.space}>
                    <TextInput placeholder="Name" style={styles.input} onChangeText={props.handleChange('name')}/>
                    </View>
                  <View style={styles.space}>
                    <TextInput placeholder="Email" style={styles.input} onChangeText={props.handleChange('email')}/>
                  </View>
                  
                  <View style={styles.space}>
                    <TextInput placeholder="Phone" style={styles.input} onChangeText={props.handleChange('phone')}/>
                  </View>
                  <View style={styles.space}>
                    <TouchableOpacity style={styles.submit} onPress={ props.handleSubmit }>
                      <Text style={styles.text}>SAVE UPDATE</Text>
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

export default Profile;

const styles = StyleSheet.create({
  container : {
        flexDirection : 'column',
        padding : 20 ,
        justifyContent : 'center',
        alignItems : 'center'
    },
  body : {
        width : '100%'
    },
  profile: {
        flex:1,
        flexWrap:"wrap",
        flexDirection:'column',
        justifyContent:'center',
        width:'100%',
        backgroundColor: '#2E42AA',
        color:'white',
        marginBottom: 10,
        marginTop:10,
        padding:20,
        borderRadius : 10,
        fontSize : 20 ,
        position:'absolute',
        textAlign : 'center'
    }, 
   pp : {
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:130,
        marginBottom:50,
        marginTop:117,
        position:'absolute',
    },
   box : {
     marginTop: 200
   },
   space : {
       flexWrap:"wrap",
       position:'relative',
       marginBottom : 15,
       justifyContent:'center',
       width : '100%',
       flexDirection:'column'
    },
    input : {
        width : '100%', 
        padding : 6, 
        borderWidth : 1,
        borderRadius : 10,
        fontSize : 12
    },
    submit : {
        padding : 14 ,
        backgroundColor : '#2E42AA',
        flexDirection : 'row',
        justifyContent : 'center',
        borderRadius : 10,
        width : '100%'
    },
    text : {
        color : 'white',
        fontSize : 14,
        textAlign :'center'
    }
}
)