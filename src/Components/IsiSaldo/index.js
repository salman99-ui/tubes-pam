import React from 'react';
import { Text, View, StyleSheet, Image , TouchableOpacity } from 'react-native';


const IsiSaldo= ()=> {
  return (
    <View>
      <View style={{flex:1, backgroundColor:'white'}}>
       <Text style={styles.topup}>Pilih Nominal Top Up</Text>
      </View>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <TouchableOpacity style={styles.action}>
            <View style={styles.containerKotak}>
            <Text style={styles.jumlah}>50</Text>
            <Text style={styles.hurufK}>K</Text>
            <Text style={styles.harga}>Rp.50.000</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.action}>
            <View style={styles.containerKotak}>
            <Text style={styles.jumlah}>50</Text>
            <Text style={styles.hurufK}>K</Text>
            <Text style={styles.harga}>Rp.150.000</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.action}>
            <View style={styles.containerKotak}>
            <Text style={styles.jumlah}>50</Text>
            <Text style={styles.hurufK}>K</Text>
            <Text style={styles.harga}>Rp.250.000</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.action}>
            <View style={styles.containerKotak}> 
            <Text style={styles.jumlah}>50</Text>
            <Text style={styles.hurufK}>K</Text>
            <Text style={styles.harga}>Rp.50.000</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.action}>
            <View style={styles.containerKotak}>
            <Text style={styles.jumlah}>50</Text>
            <Text style={styles.hurufK}>K</Text>
            <Text style={styles.harga}>Rp.50.000</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.action}>
            <View style={styles.containerKotak}>
            <Text style={styles.jumlah}>50</Text>
            <Text style={styles.hurufK}>K</Text>
            <Text style={styles.harga}>Rp.50.000</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.action}>
           <View style={styles.containerKotak}>
            <Text style={styles.jumlah}>50</Text>
            <Text style={styles.hurufK}>K</Text>
            <Text style={styles.harga}>Rp.50.000</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.action}>
           <View style={styles.containerKotak}>
           <Text style={styles.jumlah}>50</Text>
            <Text style={styles.hurufK}>K</Text>
            <Text style={styles.harga}>Rp.50.000</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.action}>
           <View style={styles.containerKotak}>
           <Text style={styles.jumlah}>50</Text>
            <Text style={styles.hurufK}>K</Text>
            <Text style={styles.harga}>Rp.50.000</Text>
            </View>
           </TouchableOpacity>
      </View>
      <View style={{borderWidth: 1, height:48, width:414,top:105, left:-3,    borderColor:'#E5E5E5',
      backgroundColor: 'white', boxshadow:'rgba(0, 0, 0, 0.25)'}
      }>
        <TouchableOpacity>
        <Image source={require('../../assets/icon/tf.png')} style={{height: 15, width: 16,left: 23,top: 17}} />
        </TouchableOpacity>
        <Text style={styles.transfer}>Transfer Bank</Text>
        <TouchableOpacity>
        <Image source={require('../../assets/icon/Polygon1.png')} style={{height: 13, width:13, left:150, top:5}}/>
        </TouchableOpacity>
        <Image  source={require('../../assets/img/image5.png')} style={{width:65, top:30,left:20}}/>
         <TouchableOpacity><Image source={require('../../assets/icon/righ-arrow.png')} style={{width:10,top:5,left:320}}/></TouchableOpacity>
          <View style={{borderBottomColor: '#ddd',borderBottomWidth: 1,top:20}}/>
        <Image  source={require('../../assets/img/image6.png')} style={{ width:116, top:35,left:20}}/>
        <TouchableOpacity><Image source={require('../../assets/icon/righ-arrow.png')} style={{width:10,top:10,left:320}}/></TouchableOpacity>
        <View style={{borderBottomColor: '#ddd',borderBottomWidth: 1,top:20}}/>
        <Image  source={require('../../assets/img/image7.png')} style={{ width:82, top:30, left:20}}/>
        <TouchableOpacity><Image source={require('../../assets/icon/righ-arrow.png')} style={{width:10,top:10,left:320}}/></TouchableOpacity>
        <View style={{borderBottomColor: '#ddd',borderBottomWidth: 1,top:20}}/>
        <Image  source={require('../../assets/img/image8.png')} style={{ width:130, top:20, left:20}}/>
        <TouchableOpacity><Image source={require('../../assets/icon/righ-arrow.png')} style={{width:10,top:0,left:320}}/></TouchableOpacity>
      </View>
    </View>
  )};

const styles = StyleSheet.create({
  topup : {fontSize:10, position: 'absolute',width: 117, 
  height: 16,left: 7,top: 83, fontweight: '500',
  textAlign: 'center'
  },
  containerKotak : {
      height:56, width:91, borderColor:'#2B2B2B', borderWidth:1, 
      borderRadius:8, marginHorizontal:9, marginVertical:10, 
      position:'relative', paddingLeft:2, paddingTop:0, paddingRight:1,top:100
  },
  jumlah : {
    marginTop:2, fontSize:15, fontWeight:'500'
  },
  harga : {
    fontSize:12, color:'red'
  },
  hurufK:{
    position:'absolute', left:20, fontSize:15, fontWeight:'500',
    lineheight: 100, align: 'center',verticalalign: 'top'
  },
  action:{
    borderColor:'#2E42AA',
  },
  transfer :{
    position: 'absolute',
    width: 193,
    height: 45,
    left: -4,
    top:17,
    fontStyle: 'normal',fontWeight: '500',fontSize: 15,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.03
  }
})

export default IsiSaldo;
