import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { Text, View , StyleSheet , ScrollView} from 'react-native'
const Note = () => {

}
export class index extends Component {
    constructor(props){
        super(props)

        this.state = {
            noteArray : [] ,
            noteText : ''
        }
    }

    render() {
        let notes = this.state.noteArray.map((val , key) => {
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={() => this.deleteNote(key)}
            />
        })
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Text style={Styles.headerText}>Daftar Kegiatan</Text>
                </View>
                
                <ScrollView style={Styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={Styles.footer}>
                    <TextInput 
                        style={Styles.TextInput}
                        onChangeText={(noteText) => this.setState({noteText})}
                        value={this.state.noteText}
                        placeholder="Ketik disini ..."
                        placeholderTextColor ='grey'
                        underlineColorAndroid = 'transparent'
                    />
                </View>

                <TouchableOpacity onPress={this.addTask.bind(this)} style={Styles.addButton}>
                    <Text style={Styles.addButtonText}></Text>
                </TouchableOpacity>
            </View>
        )
    }

    addTask(){
        if(this.state.noteText){
            var date = new Date()
            this.state.noteArray.push({
                'date' : date.getFullYear() + 
                '/' + (date.getMonth() + 1 ) + 
                '/' + date.getDate() ,
                'note' : this.state.noteText

            })
            this.setState({'noteArray' : this.state.noteArray})
            this.setState({'noteText' : this.state.noteText})
        }
    }

    deleteNote(key){

    }

}

export default index

const Styles = StyleSheet.create({

})