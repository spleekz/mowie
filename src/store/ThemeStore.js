import { makeAutoObservable } from "mobx";
import { makePersistable } from 'mobx-persist-store';
class ThemeStore {
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, { name: 'ThemeStore', properties: ['isDarkTheme'], storage: window.localStorage });
  }
  isDarkTheme = false;

  setTheme = () => {
    this.isDarkTheme = !this.isDarkTheme
  }
}
export default new ThemeStore()