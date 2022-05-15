import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'
export default class HomeScreen extends Component{
    render(){
        return(
            <View>
            <Text style={styles.hometext}>
            HomeScreen   
            </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
hometext:{
    justifyContent:"center",
    alignItems:"center",
}
})