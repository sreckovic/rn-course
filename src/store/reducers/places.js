import * as actionTypes from "../actions/actionTypes";

const initialState = {
  places: []
  //selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri:
              "https://static.pexels.com/photos/221471/pexels-photo-221471.jpeg"
          }
        })
      };
    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
        //selectedPlace: null
      };
    /*case actionTypes.SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.key;
        })
      };
    case actionTypes.DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };*/
    default:
      return state;
  }
};

export default reducer;
