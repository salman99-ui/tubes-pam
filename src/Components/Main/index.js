import * as React from "react"
import { 
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground
 } from "react-native"
import Slider from "react-native-hook-image-slider"

const Banner = ()=>{
  return(
    <View style={{height:20}}>
      <Slider
        
        images={[
          
          'https://i.postimg.cc/G24Jg2bk/banner2.jpg',
          'https://i.postimg.cc/VsH2NrSc/Best-Types-of-Wood-for-Furniture.jpg'
        ]} imageHeight={215} emptyDotColor={'#888'}
      />
      </View>
  )
}
const App = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <Banner/>
    
      <View>
      <ScrollView showsVerticalScrollIndicator={false} style = {{marginTop:200}}>
            <View style={styles.data}>
                <TouchableOpacity style={styles.cover} onPress={() => navigation.navigate('Dinning')}>
                    <ImageBackground style={styles.background} source={require('../../assets/img/dinningroom.jpg')} >
                        <View style={styles.info}>
                            <Text style={styles.text}>Ruang Makan</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            
            <View style={styles.data}>
                <TouchableOpacity style={styles.cover} onPress={() => navigation.navigate('Bedroom')}>
                    <ImageBackground style={styles.background} source={require('../../assets/img/bedroom.jpg')} >
                        <View style={styles.info}>
                            <Text style={styles.text}>Ruang Tidur</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={styles.data}>
                <TouchableOpacity style={styles.cover} >
                    <ImageBackground style={styles.background} source={require('../../assets/img/livingroom.jpg')} >
                        <View style={styles.info}>
                            <Text style={styles.text}>Ruang Tamu</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={styles.data2}>
                <TouchableOpacity style={styles.cover}>
                    <ImageBackground style={styles.background} source={require('../../assets/img/workingroom.jpg')} >
                        <View style={styles.info}>
                            <Text style={styles.text}>Ruang Kerja</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container2 : {
        paddingTop : 20,
        paddingHorizontal : 10 ,
        flex : 1 ,
        flexDirection : 'column' 
    } ,

    data : {
        width : '100%' ,
        height : 160,
        marginBottom : 5,
    } ,
    data2 : {
      width : '100%' ,
        height : 130,
        marginBottom:20
    },

    cover : {
        flex : 1
    } , 


    background : {
        flex : 1 ,
        width : '100%' ,
        height : '100%' ,
        position : 'relative' ,
       
    } ,

    info : {
        position : 'absolute' ,
        backgroundColor : '#C4C4C4' ,
        padding : 10 ,
        borderTopLeftRadius : 8 ,
        bottom : 0 ,
        right : 0
    } ,

    text : {
        color : 'black' ,
        fontWeight : '600' ,
        fontFamily : 'sans-serif'
    }
})

export default App;