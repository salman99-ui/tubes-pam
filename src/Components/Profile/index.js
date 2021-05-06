import React from 'react'
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native'

const Profile =()=> {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.profile}>Profile</Text>
          <Image source={require('../../assets/icon/profil.png')} style={styles.pp}/>
            <View style={styles.box}>
              <View style={styles.space}>
                <TextInput placeholder="Name" style={styles.input}/>
              </View>
              <View style={styles.space}>
                <TextInput placeholder="Email" style={styles.input}/>
              </View>
              <View style={styles.space}>
                <TextInput placeholder="Password" style={styles.input}/>
              </View>
              <View style={styles.space}>
                <TextInput placeholder="Address" style={styles.input}/>
              </View>
              <View style={styles.space}>
                <TextInput placeholder="Phone" style={styles.input}/>
              </View>
              <View style={styles.space}>
                <TouchableOpacity style={styles.submit}>
                  <Text style={styles.text}>SAVE UPDATE</Text>
                </TouchableOpacity>
              </View>
        </View>
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