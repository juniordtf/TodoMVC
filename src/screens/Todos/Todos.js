/**
* @format
* @flow
*/
import React, { Component } from 'react'
import { Button, View, Text, FlatList, TextInput, TouchableHighlight } from 'react-native'
import { observer } from 'mobx-react/native'



/* style and state */
import styles from './style'
import controller from './Controller'
import { toJS } from 'mobx';

type Props = {}

@observer
export default class Todos extends Component<Props> {

  renderItem = ({ item }) => {
    return (
      <View>
       <Text style={styles.label}>{item}</Text>
       <Button
        onPress={() => this.props.navigation.navigate("editTodos",{item})}
        title="Editar tarefa"
        />
       <View style={styles.line}/>
      </View>
    )
  }

  render () {

    console.log(JSON.stringify((controller.items)))
    return (
     <View style={{flex: 1}}>
      
     <View style={{flex: 1}}>
      <FlatList
        data={controller.items}
        extraData={toJS(controller.items)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
     </View>
      
      <View style={styles.contentIpunt}>
        <TextInput
          returnKeyType='done'
          placeholder={'Nova Tarefa'}
          style={styles.input}
          value={controller.newTodo}
          onChangeText={(text) => controller.addTodo(text)}
        />

        <Button
          title='Salvar'
          onPress={()=> {controller.saveTodo()}}
        />
     </View>

     </View>
    )
  }
}
