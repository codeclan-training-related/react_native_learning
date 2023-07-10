import { useState } from "react";
import { StyleSheet, View, FlatList,Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from 'expo-status-bar';



export default function App() {



  const [modalIsVisible, setmodalIsVisible]=useState(false);
  const [goals, setGoals] = useState([]);



  function startAddGoalHandler(){
    setmodalIsVisible(true);
  }

  function endAddGoalHandler(){
    setmodalIsVisible(false);
  }


  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [...currentGoals, {text:enteredGoalText, id:Math.random().toString()}]);
    endAddGoalHandler();

  }
function deleteGoalHandler(id){
  setGoals((currentGoals)=>{
    return currentGoals.filter((goal)=>goal.id!==id);
  });
 
}


  return (
   <>
   <StatusBar style="light" />
      <View style={styles.appContainer}>
      <Button title="ADD NEW GOAL" color='blue' onPress={startAddGoalHandler}
      />

     

    <GoalInput visible={modalIsVisible}
                addGoalHandler={addGoalHandler}  
                endAddGoalHandler={endAddGoalHandler} 
            />

      <View style={styles.goalsContainer}>
        <FlatList 
         data={goals}
         keyExtractor={(item,index)=>{
              return item.id;
            }}
         renderItem={(goalData)=>{
          return (<GoalItem 
          text={goalData.item.text} 
          id={goalData.item.id}
          deleteGoalHandler={deleteGoalHandler}
          />
          );
          }}
           
          />
          </View>
      </View>
      </>
    
  );
}

// style prop is supported on view and text
// StyleSheet is an object;  .create is a built in method:
const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 40,
    flex: 1,
    padding: 100,
    borderColor: "red",
    borderWidth: 2,
    paddingTop: 50,
  },

  goalsContainer: {
    flex: 4,
  },
 

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    color: "red",
  },
});

// <View style={styles.container}>

// <View>
// {/* inline style below, but not recommended:  */}
// <Text style={{color:'#ccc', margin: 16, borderWidth:2, borderColor:"pink", padding:16}}>Hello world!</Text>
// </View>

// <View>
// <Text  style={styles.paragraph}> Test Test Three</Text>
// </View>

// <View style={styles.button}>
// <Button title="income"/>
// <Button title="outcome"/>
// <Button title="balance"/>
// </View>

// </View>
