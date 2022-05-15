import React,{Component} from 'react'
import {Text,View,StyleSheet}from "react-native"
export default class MeteorScreen extends Component{
    render(){
        return(
            <View>
            <Text style={styles.meteortext}>
                MeteorScreen
            </Text>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    meteortext:{
        justifyContent:"center",
        alignItems:"center"
    }
})