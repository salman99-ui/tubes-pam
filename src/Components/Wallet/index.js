import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

const Wallet=() => {
  return (
    <View style={{flex:1, backgroundColor:'pink'}}> 
      <View style={{backgroundColor:'white', height:267, alignItems:'center', borderBottomWidth:2, borderBottomColor:'#B1B1B1'}}>
          <Text style={{fontSize:36, fontWeight:'500', marginTop:30}}>Saldo</Text>
          <Text style={{fontSize:36, fontWeight:'500'}}>Rp. 10.000.000</Text>
          <Pressable style={{height: 56, width:204, backgroundColor:'#C4C4C4', alignItems:'center', justifyContent:'center', marginTop:57 , flexDirection:'row'}}>
            <Image source={require('../../assets/icon/wallet.png')} style={{height:40, width:40, marginRight:5}}/>
            <Text style={{fontSize:24, fontWeight:'500'}}>Isi saldo</Text>
          </Pressable>
      </View>
      <ScrollView style={{flex:1, backgroundColor:'white', paddingTop:27}}>
         <Text style={{fontSize:22, fontWeight:'500'}}>Transaksi Terakhir</Text>
        <View style={{height:1, backgroundColor:'black', marginHorizontal:5}}/>
      </ScrollView>
    </View>
  )
}

export default Wallet;