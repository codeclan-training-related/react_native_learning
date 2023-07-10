import { StyleSheet, View, TextInput,Button,Modal,Image } from "react-native";
import { useState } from "react";

function GoalInput({ visible, addGoalHandler, endAddGoalHandler }) {
    const [enteredGoalText, setEnteredGoalText] = useState('');


    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    
      }

    //   below is to call addGoalHandler from App.js
      function addGoalHandler2(){
        addGoalHandler(enteredGoalText);
         setEnteredGoalText('')
      }



    return(
      <Modal visible={visible} animationType="slide">
  <View style={styles.inputContainer}>
  <Image source={ require('../assets/images/icon.png')} style={styles.image}/>



    <TextInput
      style={styles.TextInput}
      placeholder="hello Tomorrow"
      onChangeText={goalInputHandler}
      value={enteredGoalText}
    />
    <View style={styles.buttonContainer}>
    <View style={styles.button}>
    <Button title="button" onPress={addGoalHandler2} color="pink"/>
    </View>
    <View style={styles.button}>
    <Button title="Cancle" onPress={endAddGoalHandler} color="pink"/>
    </View>

</View>
  </View>
  </Modal>
  );
}

export default GoalInput;


const styles=StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: "column",
        padding:16,
        paddingHorizontal: 0,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "blue",
        backgroundColor:"#311b6b"
      },
      image:{
        width:100,
        height:100,
        margin:20
      },
      TextInput: {
        color:"white",
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor:"#e4d0ff",
        color:"#120438",
        width: "90%",
        height: 35,
        marginRight: 3,
        paddingLeft: 10,
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:16

      },
      button:{
        width:'30%',
        marginHorizontal:8
      }

})
