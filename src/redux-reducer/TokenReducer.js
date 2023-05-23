import tokenActionType from "../config/tokenActionType"

const initialState = {
  loginToken: null
}

export const tokenReducer = (state = initialState, action) => {
  console.log("action", action.type, action.payload)
  switch (action.type) {
    case tokenActionType.GET_TOKEN:
      return ({
        ...state,
        loginToken: action.payload,
      })
    default:
      return state
  }
}
