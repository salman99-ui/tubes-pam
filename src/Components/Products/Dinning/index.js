import React from 'react'
import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
const Data = () => {
    return (
    <View style={styles.container}>
    <View style={{flex : 1}}>
    <View style={styles.row}>
      <View style={styles.card}>

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/piring.jpg')}/>
            <Text style={styles.title}>Piring</Text>
            <Text style={styles.price}>$90.00</Text>
            <Text style={styles.rating}>Rating : 5</Text>
  
              <TouchableOpacity style={styles.action}>
                <Text style={styles.buy}>Beli</Text>
              </TouchableOpacity>
            
          </View>
        
      </View>

      <View style={styles.card}>
        
         

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/tekoair2.jpg')}/>
            <Text style={styles.title}>Teko</Text>
            <Text style={styles.price}>$90.00</Text>
            <Text style={styles.rating}>Rating : 5</Text>
              <TouchableOpacity style={styles.action}>
                <Text style={styles.buy}>Beli</Text>
              </TouchableOpacity>
          </View>
        
      </View>

    
  </View>

  <View style={styles.row}>
      <View style={styles.card}>

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/mangkuk2.jpg')}/>
            <Text>Mangkuk 2</Text>
            <Text style={styles.price}>$90.00</Text>
            <Text style={styles.rating}>Rating : 5</Text>
  
              <TouchableOpacity style={styles.action}>
                <Text style={styles.buy}>Beli</Text>
              </TouchableOpacity>
          </View>
        
      </View>

      <View style={styles.card}>

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/mejamakan2.jpg')}/>
            <Text>Meja Makan 2</Text>
            <Text style={styles.price}>$90.00</Text>
            <Text style={styles.rating}>Rating : 5</Text>
              <TouchableOpacity style={styles.action}>
                <Text style={styles.buy}>Beli</Text>
              </TouchableOpacity>
          </View>
        
      </View>

    
  </View>
  </View>

  </View>
    )
}

const Home = () => {
    return(
        <View>
            <Text>Home</Text>
        </View>
    )
}
const Index = () => {
  return (
   <Tab.Navigator tabBarOptions={{activeTintColor : 'black'}}>
       <Tab.Screen component={Data} name="Products"/>
       <Tab.Screen component={Home} name="Home" />
   </Tab.Navigator>
  )
}

export default Index

const styles = StyleSheet.create({
  container : {
    paddingHorizontal : 8 ,
    paddingTop : 20 ,
    flex : 1 
  } ,

  row : {
    flexDirection : 'row' ,
    justifyContent : 'space-between' ,
    
  } ,

  card : {
    width : 180 ,
    height : 300 ,
    backgroundColor : 'white' ,
    position : 'relative' ,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

  },

  content : {
    position : 'absolute' ,
    width : '100%' ,
    padding : 8
  } , 

  text : {
    textAlign : 'center' ,
    color : 'white' ,
    marginTop : 10 ,
    fontSize : 11 
  } , 
  title : {
    fontSize : 18 ,
    fontWeight : 'bold' ,
    marginVertical : 8
  } ,

  price : {
    fontSize : 18 ,
    fontWeight : 'bold' 
  } ,

  content : {
    width : 160 ,
    height : 200
  } ,

  img : {
    width : 150 , 
    height : 160
  } ,
  action : {
    width : '100%' ,
    padding : 10 ,
    backgroundColor : 'black' ,
    marginTop : 8
  } ,

  buy : {
    textAlign : 'center' ,
    color : 'white'
  }
})
