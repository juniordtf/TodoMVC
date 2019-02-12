
/**
* @format
* @flow
*/

import { observable, action, computed } from 'mobx'
import store from '../../stores'



class editTodoController {

  @observable
  todo


  @action
  setTodo(todo: string) {
    const a = store.todos.items.indexOf(todo)
    store.todos.items[a] = todo
    this.todo = todo
  }

  @action
  saveTodo() {
    store.todos.editTodo(this.todo)
    store.todos.addTodo(this.todo)
    this.todo = ''
  }

  @action
  addTodo(todo: string) {
    this.todo = todo
  }

  @computed
  get items() {
    return store.todos.items
  }
  
  @computed
  get newTodo() {
    return this.todo
  }


}


export default new editTodoController()
