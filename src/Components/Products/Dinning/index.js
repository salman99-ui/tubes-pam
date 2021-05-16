import React , {useState} from 'react'
import { StyleSheet, Text, View , Image , TouchableOpacity , ToastAndroid , ScrollView} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Cart from '../../Keranjang'
import Wallet from '../../Wallet'
import Order from '../../Order'
import {Add} from '../../../Redux/Cart/Action'
import {useDispatch , useSelector} from 'react-redux'
import Profile from '../../profileroot'
const Tab = createBottomTabNavigator()

const Data = ({navigation}) => {
  const dispatch = useDispatch()
  
    return (
    
    <View style={styles.container}>
      <TouchableOpacity style={{marginTop:20, position:'relative'}}  onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../../assets/icon/left-arrow.png')} style={{height:20, width:20}}/>
        <Text style={styles.header}>TAONGA</Text>
     </TouchableOpacity>
    <View style={{flex : 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.row}>
      <View style={styles.card}>

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/piring.jpg')}/>
            <Text style={styles.title}>Plate</Text>
            <Text style={{fontSize:7}}>Material : Melamin</Text>
            <Text style={{fontSize:7}}>Variasi : Random</Text>
            <Text style={styles.price}>Rp. 25.000</Text>
            <View style={{position:'relative'}}>
              <Text style={styles.rating}>Rating :5 </Text>
              <Image source={require('../../../assets/icon/star.png')} style={styles.bintang}/>
            </View>
          
  
              <TouchableOpacity style={styles.action} onPress={() => {
                dispatch( Add({name : 'piring' , price : 25}) )
                ToastAndroid.show('Success Add Item to Cart' , 2000)
                
                }}>
                <Text style={styles.buy}>Buy</Text>
              </TouchableOpacity>
            
          </View>
        
      </View>

      <View style={styles.card}>
        
         

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/tekoair2.jpg')}/>
            <Text style={styles.title}>Teapot</Text>
            <Text style={{fontSize:7}}>Material : Porcelain</Text>
            <Text style={{fontSize:7}}>Variasi : estetik</Text>
            <Text style={styles.price}>Rp. 200.000</Text>
            <View style={{position:'relative'}}>
              <Text style={styles.rating}>Rating :5 </Text>
              <Image source={require('../../../assets/icon/star.png')} style={styles.bintang}/>
            </View>
              <TouchableOpacity style={styles.action} onPress={() => dispatch( Add({name : 'piring' , price : 200}) )}>
                <Text style={styles.buy}>Buy</Text>
              </TouchableOpacity>
          </View>
        
      </View>

    
  </View>

  <View style={styles.row}>
      <View style={styles.card}>

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/mangkuk2.jpg')}/>
            <Text style={styles.title}>Bowl</Text>
            <Text style={{fontSize:7}}>Material : Glass</Text>
            <Text style={{fontSize:7}}>Variasi : choco bowl</Text>
            <Text style={styles.price}>Rp. 50.000</Text>
            <View style={{position:'relative'}}>
              <Text style={styles.rating}>Rating :5 </Text>
              <Image source={require('../../../assets/icon/star.png')} style={styles.bintang}/>
            </View>
              <TouchableOpacity style={styles.action} onPress={() => dispatch( Add({name : 'piring' , price : 500}) )}>
                <Text style={styles.buy}>Buy</Text>
              </TouchableOpacity>
          </View>
        
      </View>

      <View style={styles.card}>

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/mejamakan2.jpg')}/>
            <Text style={styles.title}>Meja Makan</Text>
            <Text style={{fontSize:7}}>Material : Jati</Text>
            <Text style={{fontSize:7}}>Variasi : 5 kursi</Text>
            <Text style={styles.price}>Rp. 590.000</Text>
            <View style={{position:'relative'}}>
              <Text style={styles.rating}>Rating :5 </Text>
              <Image source={require('../../../assets/icon/star.png')} style={styles.bintang}/>
            </View>
              <TouchableOpacity style={styles.action} onPress={() => dispatch( Add({name : 'piring' , price : 590}) )}>
                <Text style={styles.buy}>Buy</Text>
              </TouchableOpacity>
          </View>
        
      </View>

    
  </View>

  <View style={styles.row}>
      <View style={styles.card}>

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/mejamakan.jpg')}/>
            <Text style={styles.title}>Meja makan</Text>
            <Text style={{fontSize:7}}>Material : Jati</Text>
            <Text style={{fontSize:7}}>Variasi : Table White</Text>
            <Text style={styles.price}>Rp. 900.000</Text>
            <View style={{position:'relative'}}>
              <Text style={styles.rating}>Rating :5 </Text>
              <Image source={require('../../../assets/icon/star.png')} style={styles.bintang}/>
            </View>
  
              <TouchableOpacity style={styles.action} onPress={() => dispatch( Add({name : 'piring' , price : 900}) )}>
                <Text style={styles.buy}>Buy</Text>
              </TouchableOpacity>
          </View>
        
      </View>

      <View style={styles.card}>

          <View style={styles.content}>
            <Image style={styles.img} source={require('../../../assets/ruangmakan/mangkuk3.jpg')}/>
            <Text style={styles.title}>Bowl</Text>
            <Text style={{fontSize:7}}>Material : Glass</Text>
            <Text style={{fontSize:7}}>Variasi : white bowl</Text>
            <Text style={styles.price}>Rp. 40.000</Text>
            <View style={{position:'relative'}}>
              <Text style={styles.rating}>Rating :5 </Text>
              <Image source={require('../../../assets/icon/star.png')} style={styles.bintang}/>
            </View>

              <TouchableOpacity style={styles.action} onPress={() => dispatch( Add({name : 'piring' , price : 40}) )}>
                <Text style={styles.buy}>Buy</Text>
              </TouchableOpacity>
          </View>
        
      </View>

    
  </View>
  </ScrollView>
  </View>

  </View>
    )
}
const Index = () => {
  const items = useSelector(state => state.order.items)
  return (
   <Tab.Navigator
   screenOptions = {({route}) => ({
     tabBarIcon : ({focused , color , size }) => {
      let iconName;

      if (route.name === 'Products') {
        iconName = focused
          ? 'plus-circle'
          : 'plus-circle';
      } else if (route.name === 'Cart') {
        iconName = focused ? 'shopping-cart' : 'shopping-cart';
      } else if (route.name === 'Wallet') {
        iconName = focused ? 'google-wallet' : 'google-wallet';
      } else if (route.name === 'Order') {
        iconName = focused ? 'truck' : 'truck';
      }else if (route.name === 'Profile') {
        iconName = focused ? 'user' : 'user';
      }

      // You can return any component that you like here!
      return <Icon name={iconName} size={size} color={color} />;
     }
   })}
   tabBarOptions={{activeTintColor : 'black' , inactiveTintColor : 'grey'}}>

       <Tab.Screen component={Data} name="Products"/>
       <Tab.Screen component={Cart} name="Cart"/>
       <Tab.Screen component={Wallet} name="Wallet" />
       <Tab.Screen component={Order} name="Order" options={{tabBarBadge : items == 0 ? null : items}} />
       <Tab.Screen component={Profile} name="Profile" />
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
    paddingLeft:5,
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
    fontWeight : 'bold',
    color:'#2E42AA'
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
  },
  bintang : {
    position:'absolute',
    left:40,
    width:8,
    height:8,
    top:3
  },
  rating : {
    fontSize:10
  },
  header:{
    alignSelf:'center', fontWeight:"bold", position:'absolute'
  }
})
