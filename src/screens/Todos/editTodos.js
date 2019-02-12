/**
* @format
* @flow
*/
import React, { Component } from 'react'
import { Button, View, Text, FlatList, TextInput } from 'react-native'
import { observer } from 'mobx-react/native'


/* style and state */
import styles from './style'
import controller from './Controller2'
import { toJS } from 'mobx';

type Props = {}

@observer
export default class editTodos extends Component<Props> {


  render () {

    const item = this.props.navigation.getParam(
      'item' 
  );

  controller.setTodo(item)
    

    console.log(JSON.stringify((controller.items)))
    return (

    <View style={{flex: 1}}>

     <View style={{flex: 1}}>
      <Text>{item}</Text>
     </View>

      <View style={styles.contentIpunt}>
      <TextInput
        returnKeyType='done'
        placeholder={'Alterar nome para'}
        style={styles.input}
        value={controller.newTodo}
        onChangeText={(text) => controller.addTodo(text)}
      />

      <Button
        title='Alterar'
        onPress={()=> {controller.saveTodo()}}
      />
    </View>
  </View>
    )
  }
}
