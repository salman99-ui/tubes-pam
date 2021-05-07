import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const images = [
  'https://i.postimg.cc/sMkyrXqM/taonga.png',
  'https://i.postimg.cc/G24Jg2bk/banner2.jpg' ,
  'https://i.postimg.cc/VsH2NrSc/Best-Types-of-Wood-for-Furniture.jpg'
]

const Kategori = ({navigation})=>{
  return(
  
    <ScrollView showsVerticalScrollIndicator={false} style = {{marginTop:190, zIndex:-1}}>

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
                <TouchableOpacity style={styles.cover}>
                    <ImageBackground style={styles.background} source={require('../../assets/img/workingroom.jpg')} >
                        <View style={styles.info}>
                            <Text style={styles.text}>Ruang Kerja</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

     </ScrollView>

  );
}


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  change(nativeEvent) {
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== this.state.active) {
        this.setState({
          active:slide
        })
      }
    }
  }

  render() {
    const { active } = this.state;
    return (
      <View>
            <SafeAreaView style={styles.container}>
                <View style={styles.wrap}>

                    <ScrollView
                    onScroll={({ nativeEvent })=>this.change(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                    >
                    {
                        images.map((e, index) =>
                        <Image
                            key={e}
                            resizeMode="stretch"
                            style={styles.wrap}
                            source={{ uri: e }}
                        />
                        )
                    }
                    </ScrollView>

                    <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                        <Text
                            key={e}
                            style={active === index ? styles.dotActive : styles.dot}>●</Text>)
                    }
                    </View>

                </View>
        </SafeAreaView>

        <Kategori/>
              
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25 // 25% window
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    margin: 3,
    color: '#888'
  },
  dotActive: {
    margin: 3,
    color: 'black'
  },
   container2 : {
        paddingTop : 20,
        paddingHorizontal : 10 ,
        flex : 1 ,
        flexDirection : 'column' 
    } ,

    data : {
        width : '100%' ,
        height : 187,
        marginBottom : 5,
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

export default Index;