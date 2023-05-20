import markerActionType from "../config/markerAction"

const initialState = {
  markers: [],
}

export const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case markerActionType.get:
      return ({
        ...state,
        markers: action.markers,
      })

      case markerActionType.add:
      return ({
        ...state,
        markers: action.markers,
      })

      case markerActionType.edit:
      return ({
        ...state,
        markers: action.markers,
      })

      case markerActionType.delete:
      return ({
        ...state,
        markers: action.markers,
      })

    default:
      return state
  }
}
