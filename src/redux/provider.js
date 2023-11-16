import { Provider } from 'react-redux'
import { reduxStore } from './store'

export const StoreProvider = (props) => {
  return <Provider store={reduxStore}>{props.children}</Provider>
}