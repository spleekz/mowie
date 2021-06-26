import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
export class ThemeStore {
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'ThemeStore',
      properties: ['isDarkTheme'],
      storage: window.localStorage,
    })
  }
  isDarkTheme = false

  setTheme = () => {
    this.isDarkTheme = !this.isDarkTheme
  }
}
