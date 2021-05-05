import React from 'react'
import { Text, View, StyleSheet, Image, Pressable , ScrollView , TouchableOpacity ,Alert} from 'react-native';
import {useSelector , useDispatch} from 'react-redux'
import Buy from '../../Redux/Wallet/Action'
import Order from '../../Redux/Order/action'
import {deletecart} from '../../Redux/Cart/Action'
  const Keranjang = ({navigation})=>{
    const data = useSelector(state => state.cart.data)
    const total_price = useSelector(state => state.cart.total_price)
    const saldo = useSelector(state => state.wallet.saldo)
    const dispatch = useDispatch()
    return (
      <View style={styles.container}>
      <View style={{flex:1}}>
      <ScrollView>
        {
          data.map( (items , index ) => (
            <View style={styles.areaProduk} key={index}>
          
            <Image source={require('../../assets/ruangmakan/piring.jpg')} style={styles.gambarProduk}/>
            <View style={styles.produk}>
            <Text style={styles.namaProduk}>{items.name}</Text>
            <Text style={styles.hargaProduk}>Price ${items.price}</Text>
            </View>
           
          </View>
          ))
        }
        </ScrollView>
        
     </View>
      <View style={styles.footer}>
       <Text style={styles.total}>Total Belanja: ${total_price}</Text>
          <TouchableOpacity style={styles.tombolPesan} onPress={() => {
            
            
            if(saldo > total_price){
              
              dispatch(Buy({name : 'piring' , price : total_price}))
              
              dispatch(deletecart())
              dispatch(Order({name : 'piring' , price : total_price}))
              Alert.alert(
              "Success",
              "Berhasil Melakukan Pembayaran",
              [
              { text: "OK", onPress: () => navigation.navigate('Wallet') }
              
              ]
            );
            }else{
              Alert.alert(
                "Transaction Failure",
                "Gagal Melakukan Pembayaran Saldo anda kurang",
                [
                { text: "OK", onPress: () => console.log("Try Again") }
                
                ]
              );
            }
            
          }}>
              <Text style={styles.teksPesan}>BUAT PESANAN</Text>
          </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: 'white'
  },
 
  
  areaProduk : {
    height: 116,
    backgroundColor:'white', 
    flexDirection:'row' ,
    padding : 8 ,
    marginBottom : 8 ,
    justifyContent : 'space-between'
  },
  gambarProduk: {
    width: 90, 
    height:80, 
    marginTop: 10, 
    marginLeft: 20
  },
  produk : {
    flex : 1 ,
    flexDirection : 'column' ,
    padding : 10 ,
    justifyContent : 'center' ,
    
  }
  ,
  namaProduk: {
   
    fontSize:17
  },
  hargaProduk : {
    marginTop : 8 ,
    color:'grey'
  },
  
  footer :{
    height:109, 
    backgroundColor:'white', 
    alignItems:'center', 
    justifyContent:'center'
  },
  total : {
    marginLeft:190, 
    marginTop:-20, 
    fontWeight:'bold'
  },
  tombolPesan : {
    height:40, 
    width:227, 
    backgroundColor: 'orange', 
    alignItems:'center', 
    justifyContent:'center'
  },
  teksPesan : {
    color: 'rgba(0, 0, 0, 0.51)'
  }

});

export default Keranjang;
 