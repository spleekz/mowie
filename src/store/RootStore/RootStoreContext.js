import { createContext, useContext } from 'react'
import { RootStore } from './RootStore'

export const RootStoreContext = createContext(null)

export const RootStoreProvider = ({ children }) => {
  const rootStore = new RootStore()
  return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
}

export const useStore = () => useContext(RootStoreContext)
