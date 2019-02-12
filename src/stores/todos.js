/**
* @format
* @flow
*/

import { observable, action, computed } from 'mobx'

export default class Todo {

  @observable
  items = ['Preparar Aula', 'Criar Prova', 'Criar Trabalho']


  @action
  addTodo (todo: string): void {
    this.items.push(todo)
  }

  @action
  editTodo (todo: string): void {
    this.items.pop(todo)
  }

}
