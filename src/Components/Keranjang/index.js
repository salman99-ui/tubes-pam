import React from 'react'
import { Text, View, StyleSheet, Image, Pressable , ScrollView , TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux'
  const Keranjang = ()=>{
    const data = useSelector(state => state.data)
    const total_price = useSelector(state => state.total_price)

    return (
      <View style={styles.container}>
      <View style={{flex:1}}>
      <ScrollView>
        {
          data.map( items => (
            <View style={styles.areaProduk}>
          
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
          <TouchableOpacity style={styles.tombolPesan}>
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
    height:61, 
    width:227, 
    backgroundColor: '#C4C4C4', 
    alignItems:'center', 
    justifyContent:'center'
  },
  teksPesan : {
    color: 'rgba(0, 0, 0, 0.51)'
  }

});

export default Keranjang;
 