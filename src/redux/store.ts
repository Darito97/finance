import { createStore, combineReducers, compose } from "redux";
import financeReducer, { financeState } from "./financeDuck";

const rootReducer = combineReducers({
  finance: financeReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export interface storeInterface {
  finance: financeState
}

const store: storeInterface = createStore(rootReducer, composeEnhancers())

export default store
