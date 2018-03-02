import { SET_PLACES, REMOVE_PLACE } from '../actions/actionTypes';

const initialState = {
  places: []
  //selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.places
      };
    // case actionTypes.ADD_PLACE:
    //   return {
    //     ...state,
    //     places: state.places.concat({
    //       key: Math.random(),
    //       name: action.placeName,
    //       image: {
    //         uri: action.image.uri
    //       },
    //       location: action.location
    //     })
    //   };
    case REMOVE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.key;
        })
        //selectedPlace: null
      };
    // case actionTypes.SELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: state.places.find(place => {
    //       return place.key === action.key;
    //     })
    //   };
    // case actionTypes.DESELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: null
    //   };
    default:
      return state;
  }
};

export default reducer;
