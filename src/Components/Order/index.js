import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View , ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
const Index = () => {
    const data = useSelector( state => state.order.data)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.main}>
               {
                   data.map( (items , index) => (
                    <View style={styles.body} key={index}>
                        <View style={styles.imgcontent}>
                            <Image source={require('../../assets/ruangmakan/piring.jpg')} style={styles.img}/>
                        </View>
                        <View style={styles.content}>
                            <Text>Total Belanja Rp.{items.price}.000</Text>
                            <Text>Status  <Text style={{color : 'blue' , fontWeight : '600' }}>Pending</Text></Text>
                            <View style={{height : 2 , backgroundColor : 'black' , marginTop : 5}}></View>
                        </View>
                    
                    </View>
                   ))
               }
            </ScrollView>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container : {
        flex : 1 ,

    } ,

    main : {
        borderWidth : 1 
    } ,

    body : {
        flexDirection : 'row' ,
        justifyContent : 'space-between' ,

    } ,

    imgcontent : {
        flex : 1 ,
        flexDirection : 'row' ,
        alignItems : 'center' ,
        justifyContent : 'center'
    } ,

    img : {
        width : 80 ,
        height : 100
    } ,

    content : {
        flex : 1 , 
        flexDirection : 'column' ,
        justifyContent : 'center'
    }

})
