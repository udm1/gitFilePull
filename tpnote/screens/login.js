import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import { render } from 'react-dom';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { color, Value } from 'react-native-reanimated';

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password : ""
        }
    }

    validate_field=()=>{
        const{email, password} = this.state
        if(email == ""){
            alert("Please fill email")
            return false
        }
        else if(password ==""){
            alert("Please fill password")
            return false
        }
        return true
    }

    making_api_call=()=>{
        if(this.validate_field()){
            alert("Successfully login")
        }
    }

    render(){
        return(
            <View style={{width:"100%",height:"100%", justifyContent:"center", alignSelf: "center", alignContent:"center", alignItems: "center"}}>
                <TextInput placeholder={"Enter your email plaise"}  
                onChangeText={(value)=> this.setState({email, value})} 
                style={{height: 42, width: "80%", borderBottomWidth: 1}}/>
    
                <TextInput placeholder={"Enter the password"} onChangeText={(value)=> this.setState({password, value})}  
                style={{height: 42, width: "80%", borderBottomWidth: 1, marginTop: "5%"}}/>
                
                <View style={{marginTop: "10%", width: "80%"}}>
                    <TouchableOpacity style={{borderWidth: 1, height: 42, width: "80%",justifyContent: "center", alignItems: "center", borderRadius: 40, backgroundColor: "black",alignSelf: "center", textAlign: "center"}} 
                    onPress={()=> alert("Hello you clicked")}>
                        <text style={{color: "white"}}>Click here</text>
                    </TouchableOpacity>
                </View>
                <Text>{"email ==>"+this.state.email}</Text>
                <Text>{"password ==>"+this.state.password}</Text>
                
                
            </View>
        );
    }
}



