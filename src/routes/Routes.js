/**
* @format
* @flow
*/

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Todos from '../screens/Todos'
import editTodos from '../screens/Todos/editTodos'

const Routes = createStackNavigator({
  todos: {
    screen: Todos,
    navigationOptions: {
      title: 'Tarefas'
    }
  },
  editTodos: {
    screen: editTodos,
    navigationOptions: {
      title: 'Editar Tarefas'
    }
  }
})

export default createAppContainer(Routes)
