import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {useSelector} from 'react-redux'
import {DataTable} from 'react-native-paper'
const Wallet=() => {
  const data = useSelector(state => state.wallet.last_transaction)
  const saldo = useSelector(state => state.wallet.saldo)
  
  return (
    <View style={{flex:1,  paddingHorizontal : 8}}> 
      <View style={{backgroundColor:'white', height:267, alignItems:'center', borderBottomWidth:2, borderBottomColor:'#B1B1B1'}}>
          <Text style={{fontSize:36, fontWeight:'500', marginTop:30 , color : 'black'}}>Saldo</Text>
          <Text style={{fontSize:36, fontWeight:'500' , color : '#2E42AA'}}>Rp.{saldo}.000</Text>
          
      </View>
      <View style="">
        <Text style={{fontSize:22, fontWeight:'500' ,color : '#2E42AA'}}>Transaksi Terakhir</Text>
       
        <View style={{ backgroundColor:'white', marginHorizontal:5 }}/>
          <ScrollView style={{ backgroundColor:'white', paddingTop:27}}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Date</DataTable.Title>
                <DataTable.Title>Items</DataTable.Title>
                <DataTable.Title>Price</DataTable.Title>
              </DataTable.Header>

            
            {
              data.map((items , index) =>(
                <DataTable.Row key={index}>
                  <DataTable.Cell>{items.calender}</DataTable.Cell>
                  <DataTable.Cell>{items.name}</DataTable.Cell>
                  <DataTable.Cell>Rp.{items.price}.000</DataTable.Cell>
                  
                </DataTable.Row>
                
              ) )
            }
            </DataTable>
          </ScrollView>
      </View>
    </View>
  )
}

export default Wallet;