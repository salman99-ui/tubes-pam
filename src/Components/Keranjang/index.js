import React from 'react'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

  const Keranjang = ()=>{
    return (
      <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={styles.header}>
          <Image source={require('../../assets/icon/left-arrow.png')} style={styles.previous}/>
          <Text style={styles.titleHeader}>Keranjang Belanja</Text>
        </View>
        <View style={styles.areaProduk}>
          <Pressable style={styles.lingkaranPilih}/>
            <Image source={require('../../assets/ruangtamu/Aesthetic_chair.jpg')} style={styles.gambarProduk}/>
            <Text style={styles.namaProduk}> Aesthetic chair</Text>
            <Text style={styles.hargaProduk}>Rp.500.000</Text>
            <Pressable style={styles.kotakKurangTambah}>
              <Text style={styles.kurangTambah}>-</Text>
            </Pressable>

            <View style={styles.containerNumber}>
              <Text styke={styles.number}>1</Text>
            </View>
            
            <Pressable style={styles.kotakKurangTambah}>
              <Text style={styles.kurangTambah}>+</Text>
            </Pressable>
          </View>
     </View>
      <View style={styles.footer}>
       <Text style={styles.total}>Total Belanja: Rp.0</Text>
          <View style={styles.tombolPesan}>
              <Text style={styles.teksPesan}>BUAT PESANAN</Text>
          </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: '#E5E5E5'
  },
  header : {
    borderWidth: 1, 
    height:71,
    flexDirection: 'row', 
    borderColor:'#E5E5E5',
    backgroundColor: 'white'
  },
  previous : {
    width:15, 
    height:15, 
    marginTop:40, 
    marginLeft:15
  },
  titleHeader : {
    marginLeft: 15, 
    marginTop:38
  },
  areaProduk : {
    height: 116,
    backgroundColor:'white', 
    flexDirection:'row'
  },
  lingkaranPilih : {
    height:14, 
    width:14, 
    borderWidth:0.5, 
    borderRadius:7, 
    marginTop:12, 
    marginLeft:15
  },
  gambarProduk: {
    width: 90, 
    height:80, 
    marginTop: 10, 
    marginLeft: 20
  },
  namaProduk: {
    marginTop: 18, 
    fontSize:17
  },
  hargaProduk : {
    position:'absolute', 
    top:40, 
    left: 155, 
    color:'red'
  },
  kotakKurangTambah: {
    height:14, 
    width:21, 
    backgroundColor:'#C4C4C4', 
    alignItems:'center', 
    justifyContent:'center', 
    top: 90
  },
  kurangTambah: {
    fontSize:19
  },
  containerNumber: {
    top:88, 
    marginLeft:5, 
    marginRight:5
  },
  number : {
    fontSize:17, 
    position:'absolute'
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
 