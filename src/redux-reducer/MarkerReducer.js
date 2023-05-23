import markerActionType from "../config/markerAction"

const initialState = {
  markers: [],
  isLoading: false
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
