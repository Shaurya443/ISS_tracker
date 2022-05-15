import React,{Component} from 'react'
import {Text,View,StyleSheet}from "react-native"
export default class IssLocationScreen extends Component{
    render(){
        return(
            <View>
            <Text style={styles.isstext}>
                IssLocation
            </Text>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    isstext:{
        justifyContent:"center",
        alignItems:"center"
    }
})
