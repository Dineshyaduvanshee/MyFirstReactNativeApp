import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ComponentA, ComponentB, ComponentC, Demo, LotsOfStyles } from "./MyComponent";
import ExStyles from "./style";
import { useState } from "react";

const App = ()=>{
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [display,setDisplay]=useState(false);
  const resetData = ()=>{
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  }
  return(
    <View>
      {/* <ComponentA/>
      <ComponentB/>
      <ComponentC/> */}
      {/* <Demo/> */}
      {/* <LotsOfStyles/> */}
      {/* <Text style={{fontSize:30, color:'red',backgroundColor:'green'}}>Style in React-Native.</Text>
      <Text style={styles.textBox}>Style in React-Native.</Text> */}
      {/* <Text style={ExStyles.textBox}>Style in React-Native.</Text> */}
      <Text style={[ExStyles.textBox,styles.textBox,{marginTop:10}]}>Style in React-Native..</Text>
      <Text style={{fontSize:30}}>Your Name : {name}</Text>
      <TextInput style={style1.inputText} 
      placeholder="Enter Your Name"
      value={name}
      onChangeText={(Text)=>setName(Text)}
      />
      <Button title="Clear Input Value" onPress={()=>setName('')}/>
      <Text style={{fontSize:30}}>Simple form In React-Native</Text>
      <TextInput
      style={style2.inputText}
      onChangeText={(text)=>setName(text)}
      value={name}
      placeholder="Enter Your Name"
      />
      <TextInput
      style={style2.inputText}
      placeholder="enter Your Email Address"
      onChangeText={(text)=>setEmail(text)}
      value={email}
      />
      <TextInput
      style={style2.inputText}
      onChangeText={(text)=>setPassword(text)}
      value={password}
      placeholder="Enter Your Password"
      secureTextEntry = {true}
      />
      <View style={{marginBottom:10}}>
        <Button title="Print Details" color={'cyan'} onPress={()=>setDisplay(true)}/> 
      </View>
      <Button title="Clear Details" onPress={()=>resetData()}/>
      <View>
        {
          display ?
            
              <View>
              <Text style={{fontSize:20}}> User name is : {name}</Text>
              <Text style={{fontSize:20}}> User name is : {email}</Text>
              <Text style={{fontSize:20}}> User name is : {password}</Text>
              </View> : null
        }
      </View>
        
    </View>
  );
}
const styles = StyleSheet.create({
  textBox: {
    color: '#fff',
    fontSize:25,
    backgroundColor:'lightblue',
    marginBottom:10,
    padding:10,
    borderRadius:10,
    height:50,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor:'red',
    borderWidth:2
  }
  
});
const style1 = StyleSheet.create({
    inputText:{
      fontSize:18,
      color:'whiteblue',
      borderWidth:2,
      borderColor:'blue',
      margin:10
    }
  })
  const style2 = StyleSheet.create({
    inputText:{
      fontSize:18,
      color:'blue',
      borderWidth:2,
      borderColor:'blue',
      margin:10
    }
  })

export default App;
