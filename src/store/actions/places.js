import * as actionTypes from './actionTypes';

export const addPlace = (placeName, location, image) => {
  return {
    type: actionTypes.ADD_PLACE,
    placeName: placeName,
    location: location,
    image: image
  };
};

export const deletePlace = key => {
  return {
    type: actionTypes.DELETE_PLACE,
    placeKey: key
  };
};

/*export const selectPlace = key => {
  return {
    type: actionTypes.SELECT_PLACE,
    key: key
  };
};

export const deselectPlace = () => {
  return {
    type: actionTypes.DESELECT_PLACE
  };
};*/
