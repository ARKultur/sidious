import markerActionType from "../config/markerAction"
import tokenActionType from "../config/tokenActionType"

const initialState = {
  markers: [],
  isLoading: false,
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

export const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case markerActionType.GET_MARKERS_REQUESTED:
      return ({
        ...state,
        isLoading: true,
      })

    case markerActionType.GET_MARKERS_SUCCEEDED:
      return ({
        ...state,
        markers: action.payload,
      })

    case markerActionType.ADD_MARKERS:
    return state

    case markerActionType.edit:
    return state

    case markerActionType.delete:
    return state

    default:
      return state
  }
}
