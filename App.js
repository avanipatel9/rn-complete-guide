import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {

  const[enterdGoal, setEnteredGoal] = useState('');
  const[courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterdText) => {
    setEnteredGoal(enterdText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      {id: Math.random().toString(), value: enterdGoal}
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input} 
          onChangeText={goalInputHandler}
          value = {enterdGoal}
          />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={ itemData=> <GoalItem title={itemData.item.value}/>}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    padding: 50 
  },
  inputContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  input: { 
    borderColor: 'black', 
    width: '80%', 
    borderWidth: 1, 
    padding: 10 
  }
});
