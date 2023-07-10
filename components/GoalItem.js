import { StyleSheet,View,Text,Pressable } from "react-native";


function GoalItem(props){

return(
  <View style={styles.goalList}>
  <Pressable 
    onPress={() => props.deleteGoalHandler(props.id)}
    style={({pressed})=>pressed && styles.pressedItem} >
    <Text style={styles.goalText}>{props.text}</Text>
</Pressable>
 </View>
);

};

export default GoalItem;

const styles=StyleSheet.create({
    goalList: {
        borderColor: "pink",
    
        borderWidth: 1,
        margin: 4,
        borderRadius: 10,
        padding: 5,
        backgroundColor: "#df89dd",
        
      },
      pressedItem:{
        opacity:0.5
      },

      goalText:{
        color: "white"
      },}
);
