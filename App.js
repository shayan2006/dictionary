import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'
export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:'',
      display:''
    }
  }
  render(){
    return(
      <View>
        <Header
        backgroundColor={'#9cB210'}
        centerComponent={{text:'Dictionary',style:{color:'#fff',fontSize:20}}} />
        
        <TextInput
        style={{width:200,height:30,borderWidth:3 }}
        onChangeText={(text)=>{
           this.setState({
             text:text
           })
        }}
        value={this.state.text}
        />

        <TouchableOpacity
          onPress={()=>{
            this.setState({
              display:this.state.text
            })
          }}>

           <Text>enter</Text>

          </TouchableOpacity>

        <Text>{this.state.display}</Text> 

      </View>
    );
  }
}


