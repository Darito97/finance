//constantes
export interface newCostOrIncome {
  id: string,
  title: string,
  value: number
}
interface costOrIncome {
  title: string,
  data: Array<newCostOrIncome>
}
export interface financeState {
  Costs: costOrIncome,
  Incomes: costOrIncome
}
interface Action {
  type: string,
  payload: any
}
const initialState ={
  Costs: {
    title: "Gastos",
    data: []
  },
  Incomes: {
    title: "Ingresos",
    data: []
  }
}

const ADD_COST = "ADD_COST"
const REMOVE_COST = "REMOVE_COST"
const ADD_INCOME = "ADD_INCOME"
const REMOVE_INCOME = "REMOVE_INCOME"

//reducer

export default function financeReducer (state: financeState = initialState, action: Action){
  switch(action.type){
    case ADD_COST:
      return {...state, Costs: { title: initialState.Costs.title, data: [...action.payload]}}
    case REMOVE_COST:
      return {...state, Costs: { title: initialState.Costs.title, data: [...action.payload]}}
    case ADD_INCOME:
      return {...state, Incomes: { title: initialState.Incomes.title, data: [...action.payload]}}
    case REMOVE_INCOME:
        return {...state, Incomes: { title: initialState.Incomes.title, data: [...action.payload]}}
    default: return state
  }
}

//actions
export const addCostAction = (newCost: newCostOrIncome, prevState: financeState) =>{
  const data = prevState.Costs.data
  data.push(newCost)
  return {
    type: ADD_COST,
    payload: data
  }
}

export const removeCostAction = (idOfCost: string, prevState: financeState) =>{
  let data = prevState.Costs.data
  data = data.filter(cost => cost.id!==idOfCost)
  return {
    type: REMOVE_COST,
    payload: data
  }
}
export const addIncomeAction = (newIncome: newCostOrIncome, prevState: financeState) =>{
  const data = prevState.Incomes.data
  data.push(newIncome)
  return {
    type: ADD_INCOME,
    payload: data
  }
}

export const removeIncomeAction = (idOfIncome: string, prevState: financeState) =>{
  let data = prevState.Incomes.data
  data = data.filter(income => income.id!==idOfIncome)
  return {
    type: REMOVE_INCOME,
    payload: data
  }
}



