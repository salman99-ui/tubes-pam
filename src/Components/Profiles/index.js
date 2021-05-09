import React from 'react'
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native'

const Profile =({navigation})=> {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.profile}>
          <Image source={require('../../assets/icon/profil.png')} style={styles.pp}/>
        </View>
            <View style={styles.box}>
                <Text style={styles.content}>Data Diri</Text>
             
             <View style={styles.space}>
                <Text style={styles.header}>Name</Text>
                <Text style={styles.attr}>Joko</Text>
             </View>

             <View style={styles.space}>
                <Text style={styles.header}>Email</Text>
                <Text style={styles.attr}>slmndamanhuri</Text>
             </View>
             
             <View style={styles.space}>
                <Text style={styles.header}>Address</Text>
                <Text style={styles.attr}>Kp.Rajeg Rajawali</Text>
             </View>

             <View style={styles.space}>
                <Text style={styles.header}>Phone</Text>
                <Text style={styles.attr}>0892131212</Text>
             </View>
             
             <View style={styles.space}>
                 <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('ProfileUpdate')}>
                     <Text style={styles.textsubmit}>Update Profile</Text>
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

    profile : {
        flexDirection : 'row' ,
        justifyContent : 'center'
    },

   pp : {
        
        width : 80 ,
        height : 80
       
    },
   box : {
    
     marginTop : 30 ,
    flexDirection : 'column' ,
    alignItems : 'center' ,
    justifyContent : 'center' ,
    width : '100%'
    
   },
   content : {
    fontWeight : '900' ,
    color : 'grey' ,
    fontSize : 25 ,
    marginBottom : 10
   } ,
   
   space : {
       marginBottom : 20 ,
       width :'80%' ,
  
       flexDirection : 'column' ,
        alignItems : 'center' ,
        justifyContent : 'center'
    },

    input : {
        width : '100%', 
        padding : 6, 
        borderRadius : 10,
        fontSize : 12
    },

    text : {
        color : 'white',
        fontSize : 14,
        textAlign :'center'
    } ,

    header : {
        fontSize : 17 ,
        color : 'grey' ,
        fontWeight : 'bold'
    } ,

    attr : {
        fontSize : 19 ,
        fontWeight : '600' ,
        color : 'grey'
    } ,

    submit : {
        padding : 15 ,
        width : '84%' ,
        backgroundColor : '#2E42AA' ,

    } ,

    textsubmit : {
        color : 'white' ,
        textAlign : 'center' ,
        fontWeight : '800'
    }

}
)