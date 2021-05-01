import React from 'react'
import { StyleSheet, Text, View , ImageBackground , TouchableOpacity , ScrollView} from 'react-native'

const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.data}>
                <TouchableOpacity style={styles.cover} onPress={() => navigation.navigate('Bedroom')}>
                    <ImageBackground style={styles.background} source={require('../../assets/img/bedroom.jpg')} >
                        <View style={styles.info}>
                            <Text style={styles.text}>Ruang Tidur</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={styles.data}>
                <TouchableOpacity style={styles.cover} onPress={() => navigation.navigate('Living')}>
                    <ImageBackground style={styles.background} source={require('../../assets/img/livingroom.jpg')} >
                        <View style={styles.info}>
                            <Text style={styles.text}>Ruang Tamu</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={styles.data}>
                <TouchableOpacity style={styles.cover} onPress={() => navigation.navigate('Dinning')}>
                    <ImageBackground style={styles.background} source={require('../../assets/img/dinningroom.jpg')} >
                        <View style={styles.info}>
                            <Text style={styles.text}>Ruang Makan</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={styles.data}>
                <TouchableOpacity style={styles.cover}>
                    <ImageBackground style={styles.background} source={require('../../assets/img/workingroom.jpg')} >
                        <View style={styles.info}>
                            <Text style={styles.text}>Ruang Kerja</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container : {
        paddingTop : 30,
        paddingHorizontal : 10 ,
        flex : 1 ,
        flexDirection : 'column' 
    } ,

    data : {
        width : '100%' ,
        height : 160 ,
        marginBottom : 12
    } ,

    cover : {
        flex : 1
    } , 

    background : {
        flex : 1 ,
        width : '100%' ,
        height : '100%' ,
        position : 'relative' ,
       
    } ,

    info : {
        position : 'absolute' ,
        backgroundColor : '#C4C4C4' ,
        padding : 10 ,
        borderTopLeftRadius : 8 ,
        bottom : 0 ,
        right : 0
    } ,

    text : {
        color : 'black' ,
        fontWeight : '600' ,
        fontFamily : 'sans-serif'
    }

})
