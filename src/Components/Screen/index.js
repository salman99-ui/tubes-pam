import React , {useEffect} from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'

const Index = ({navigation}) => {

    useEffect( () => {
        setTimeout( ()=> {
            navigation.navigate('cover')
        } , 3000)
    } , [])

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/logo.jpg')} />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection : 'row' ,
        justifyContent : 'center' ,
        alignItems : 'center' 
    } ,

    img : {
        width : 150 , 
        height : 150
    }
})
