
import {StyleSheet, Text, View, Button, TextInput } from 'react-native';
// components exposed by react native

// below is called functional components.
// Text and View are built in components
// view is to hold other components, instead of content
export default function App() {
  return (
    <>
   <View style={styles.appContainer}>
<View style={ styles.inputContainer}>
  <TextInput placeholder="hello sunshine" />
  <Button title='lalalalalal'/>
</View>

<View></View>


   </View>

     
    </>
  );
}

// style prop is supported on view and text
// StyleSheet is an object;  .create is a built in method:
const styles = StyleSheet.create({
  appContainer:{
    padding: 100
  },

  inputContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly"
  },


  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph:{
  color:'red'
  }
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