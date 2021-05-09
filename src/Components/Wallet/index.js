import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import {useSelector} from 'react-redux'
const Wallet=() => {
  const data = useSelector(state => state.wallet.last_transaction)
  const saldo = useSelector(state => state.wallet.saldo)
  const test = JSON.stringify(data)
  return (
    <View style={{flex:1,  paddingHorizontal : 8}}> 
      <View style={{backgroundColor:'white', height:267, alignItems:'center', borderBottomWidth:2, borderBottomColor:'#B1B1B1'}}>
          <Text style={{fontSize:36, fontWeight:'500', marginTop:30 , color : 'black'}}>Saldo</Text>
          <Text style={{fontSize:36, fontWeight:'500' , color : '#2E42AA'}}>${saldo}</Text>
          
      </View>
      <View style="">
        <Text style={{fontSize:22, fontWeight:'500' ,color : '#2E42AA'}}>Transaksi Terakhir</Text>
       
        <View style={{ backgroundColor:'white', marginHorizontal:5 }}/>
          <ScrollView style={{ backgroundColor:'white', paddingTop:27}}>
            {
              data.map((items , index) =>(
                <View key={index} style={{marginBottom : 15}}>
                <Text  style={{fontWeight : '700' , fontSize : 14 , color : '#2E42AA'}}>Buy {items.name} Price ${items.price}</Text>
                <View style={{ backgroundColor:'white', width : '10%' , borderBottomWidth : 2 ,marginTop : 4}}/>
                </View>
              ) )
            }
          </ScrollView>
      </View>
    </View>
  )
}

export default Wallet;